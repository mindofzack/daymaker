/* ============================================================
   DAYMAKER × SHOPIFY — Storefront / Buy Button integration
   Replaces the localStorage dev cart with a real Shopify checkout.

   SETUP — fill in the three blocks marked CONFIGURE:
   ============================================================ */
(function () {
  'use strict';

  /* ─── CONFIGURE 1: your Shopify store ──────────────────────
     domain   : your myshopify URL (no https://, no trailing /)
     token    : Shopify Admin → Apps → Develop apps →
                create/open app → Storefront API → install →
                copy "Storefront API access token"            */
  var STORE_DOMAIN       = 'daymaker-7110.myshopify.com';
  var STOREFRONT_TOKEN   = 'atkn_72613ee183996e7a3c7fe48d180dceb0070805219ebce78b7363dfc51dd05873';

  /* ─── CONFIGURE 2: product variant IDs ─────────────────────
     Shopify Admin → Products → click product → click a variant
     → the ID is the last number in the URL.
     Format: gid://shopify/ProductVariant/  +  that number.   */
  var VARIANT_IDS = {
    'electrolytes': 'gid://shopify/ProductVariant/52682588127508',
    'hat':          'gid://shopify/ProductVariant/REPLACE_ME',
    'sub':          'gid://shopify/ProductVariant/52682593141012',
    'bundle':       'gid://shopify/ProductVariant/REPLACE_ME',
  };
  /* ─────────────────────────────────────────────────────────── */

  var CHECKOUT_KEY = 'dm_shopify_checkout';
  var client, checkoutId, checkoutUrl;

  /* ---- Bootstrap (waits for SDK, then restores or creates checkout) */
  function boot() {
    if (!window.ShopifyBuy) { setTimeout(boot, 40); return; }

    if (STORE_DOMAIN.indexOf('YOUR-STORE') > -1) {
      console.info('[DayMaker] shopify.js: fill in STORE_DOMAIN and STOREFRONT_TOKEN to enable real checkout.');
      return;
    }

    client = ShopifyBuy.buildClient({ domain: STORE_DOMAIN, storefrontAccessToken: STOREFRONT_TOKEN });

    /* Clear the dev localStorage cart so it doesn't flash */
    localStorage.removeItem('sealegs_cart_v1');

    var saved = localStorage.getItem(CHECKOUT_KEY);
    if (saved) {
      client.checkout.fetch(saved)
        .then(function (co) { co && !co.completedAt ? resume(co) : create(); })
        .catch(create);
    } else {
      create();
    }
  }

  function create() { client.checkout.create().then(resume); }

  function resume(co) {
    checkoutId  = co.id;
    checkoutUrl = co.webUrl;
    localStorage.setItem(CHECKOUT_KEY, checkoutId);
    renderCart(co);
  }

  /* ---- Add to cart ----------------------------------------- */
  function addToCart(item) {
    if (!client || !checkoutId) { console.warn('[DayMaker] Shopify not ready yet.'); return; }

    var vid = VARIANT_IDS[item.id];
    if (!vid || vid.indexOf('REPLACE_ME') > -1) {
      console.warn('[DayMaker] No Shopify variant mapped for product id:', item.id,
        '\nAdd it to VARIANT_IDS in shopify.js');
      return;
    }

    client.checkout.addLineItems(checkoutId, [{ variantId: vid, quantity: item.qty || 1 }])
      .then(function (co) {
        checkoutUrl = co.webUrl;
        renderCart(co);
        openDrawer();
        showToast(item.name + ' added to cart');
      });
  }

  /* ---- Render the cart drawer with live Shopify data ------- */
  function renderCart(co) {
    var count = co.lineItems.reduce(function (s, i) { return s + i.quantity; }, 0);
    var total = co.lineItems.reduce(function (s, i) {
      return s + parseFloat(i.variant.price.amount) * i.quantity;
    }, 0);

    document.querySelectorAll('.cart-count').forEach(function (el) {
      el.textContent = count;
      el.classList.toggle('show', count > 0);
    });

    var body    = document.querySelector('#cartBody');
    var totalEl = document.querySelector('#cartTotal');
    if (!body) return;

    if (!co.lineItems.length) {
      body.innerHTML = '<div class="cart-empty"><p style="font-size:15px;font-weight:700;color:var(--text-secondary)">Your cart is empty</p><p style="font-size:13px;margin-top:6px">Stay balanced. Stay energized.</p></div>';
      if (totalEl) totalEl.textContent = '$0.00';
      wireCheckout();
      return;
    }

    body.innerHTML = co.lineItems.map(function (item) {
      var img   = item.variant.image ? item.variant.image.src : '';
      var price = parseFloat(item.variant.price.amount);
      return '<div class="line-item">' +
        '<img src="' + img + '" alt="" style="background:var(--surface-3)" onerror="this.style.visibility=\'hidden\'">' +
        '<div style="flex:1">' +
          '<div style="display:flex;justify-content:space-between;gap:10px">' +
            '<b style="font-size:14px">' + item.title + '</b>' +
            '<button data-rm="' + item.id + '" style="background:none;border:none;color:var(--text-tertiary);cursor:pointer;font-size:13px">Remove</button>' +
          '</div>' +
          '<div style="font-size:13px;color:var(--text-tertiary);margin:2px 0 8px">' +
            (item.variant.title !== 'Default Title' ? item.variant.title : '') +
          '</div>' +
          '<div style="display:flex;align-items:center;justify-content:space-between">' +
            '<div class="qty-mini">' +
              '<button data-dec="' + item.id + '" data-cur="' + item.quantity + '">–</button>' +
              '<span>' + item.quantity + '</span>' +
              '<button data-inc="' + item.id + '" data-cur="' + item.quantity + '">+</button>' +
            '</div>' +
            '<b style="font-size:14px">$' + (price * item.quantity).toFixed(2) + '</b>' +
          '</div>' +
        '</div></div>';
    }).join('');

    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);

    body.querySelectorAll('[data-rm]').forEach(function (b) {
      b.onclick = function () {
        client.checkout.removeLineItems(checkoutId, [b.getAttribute('data-rm')])
          .then(function (co) { checkoutUrl = co.webUrl; renderCart(co); });
      };
    });
    body.querySelectorAll('[data-inc]').forEach(function (b) {
      b.onclick = function () {
        client.checkout.updateLineItems(checkoutId, [{ id: b.getAttribute('data-inc'), quantity: parseInt(b.getAttribute('data-cur'), 10) + 1 }])
          .then(function (co) { checkoutUrl = co.webUrl; renderCart(co); });
      };
    });
    body.querySelectorAll('[data-dec]').forEach(function (b) {
      b.onclick = function () {
        var id  = b.getAttribute('data-dec');
        var qty = parseInt(b.getAttribute('data-cur'), 10) - 1;
        var op  = qty < 1
          ? client.checkout.removeLineItems(checkoutId, [id])
          : client.checkout.updateLineItems(checkoutId, [{ id: id, quantity: qty }]);
        op.then(function (co) { checkoutUrl = co.webUrl; renderCart(co); });
      };
    });

    wireCheckout();
  }

  function wireCheckout() {
    var btn = document.querySelector('.drawer__foot .btn--primary');
    if (btn) btn.onclick = function () { if (checkoutUrl) window.location.href = checkoutUrl; };
  }

  /* ---- DOM helpers ----------------------------------------- */
  function openDrawer() {
    var d = document.querySelector('#cartDrawer'), s = document.querySelector('#scrim');
    if (d) d.classList.add('open');
    if (s) s.classList.add('open');
  }

  function showToast(msg) {
    var t = document.querySelector('#toast');
    if (!t) return;
    t.querySelector('.toast__msg').textContent = msg;
    t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ---- Expose API for site.js ----------------------------- */
  window.ShopifyCart = {
    addToCart: addToCart,
    isReady:   function () { return !!client && !!checkoutId; },
  };

  /* ---- Auto-boot ------------------------------------------ */
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
