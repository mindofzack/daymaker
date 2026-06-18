/* ============================================================
   DAYMAKER — site interactions & motion
   ============================================================ */
(function () {
  'use strict';
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll reveal (manual viewport check — bulletproof) ---------- */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (rm) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var remaining = false;
      els.forEach(function (e) {
        if (e.classList.contains('in')) return;
        var r = e.getBoundingClientRect();
        // reveal once the element's top enters the bottom 92% of the viewport
        if (r.top < vh * 0.92 && r.bottom > 0) e.classList.add('in');
        else remaining = true;
      });
      return remaining;
    }
    check();
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    // a few delayed passes catch late layout/font shifts
    [120, 350, 700, 1300].forEach(function (t) { setTimeout(check, t); });
    // ultimate safety: never leave content hidden
    setTimeout(function () { els.forEach(function (e) { e.classList.add('in'); }); }, 2600);
  }

  /* ---------- Nav scrolled + scroll progress ---------- */
  function initScrollChrome() {
    var nav = document.querySelector('.nav');
    var bar = document.querySelector('.scroll-progress');
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (nav) nav.classList.toggle('scrolled', y > 12);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Parallax (scroll + pointer) ---------- */
  function initParallax() {
    if (rm) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    var pointerEls = Array.prototype.slice.call(document.querySelectorAll('[data-tilt]'));
    var py = 0, px = 0, ticking = false;

    function apply() {
      ticking = false;
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
        var r = el.getBoundingClientRect();
        var center = r.top + r.height / 2 - vh / 2;
        el.style.transform = 'translate3d(0,' + (-center * speed) + 'px,0)';
      });
      pointerEls.forEach(function (el) {
        var amt = parseFloat(el.getAttribute('data-tilt')) || 12;
        el.style.transform = 'translate3d(' + (px * amt) + 'px,' + (py * amt) + 'px,0)';
      });
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(apply); } }
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    window.addEventListener('pointermove', function (e) {
      px = (e.clientX / window.innerWidth - 0.5) * 2;
      py = (e.clientY / window.innerHeight - 0.5) * 2;
      request();
    });
    apply();
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    var els = document.querySelectorAll('[data-count]');
    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
      var dur = 1400, start = null;
      if (rm) { el.textContent = target.toFixed(dec); return; }
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target.toFixed(dec);
      }
      requestAnimationFrame(step);
    }
    if (rm) { els.forEach(function (e) { run(e); }); return; }
    var done = [];
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (e) {
        if (done.indexOf(e) > -1) return;
        var r = e.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) { done.push(e); run(e); }
      });
    }
    check();
    window.addEventListener('scroll', check, { passive: true });
    [200, 600, 1300].forEach(function (t) { setTimeout(check, t); });
  }

  /* ---------- Hero bubbles ---------- */
  function initBubbles() {
    var host = document.querySelector('[data-bubbles]');
    if (!host || rm) return;
    var n = 18;
    for (var i = 0; i < n; i++) {
      var b = document.createElement('span');
      b.className = 'bubble';
      var size = 6 + Math.random() * 26;
      b.style.left = Math.random() * 100 + '%';
      b.style.width = b.style.height = size + 'px';
      b.style.animationDuration = (7 + Math.random() * 10) + 's';
      b.style.animationDelay = (-Math.random() * 12) + 's';
      b.style.opacity = (0.05 + Math.random() * 0.22).toFixed(2);
      host.appendChild(b);
    }
  }

  /* ---------- FAQ accordion ---------- */
  function initFaq() {
    document.querySelectorAll('[data-faq]').forEach(function (item) {
      var btn = item.querySelector('.faq__q');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var open = item.classList.contains('open');
        var group = item.closest('[data-faq-group]');
        if (group) group.querySelectorAll('[data-faq].open').forEach(function (o) {
          if (o !== item) { o.classList.remove('open'); var a = o.querySelector('.faq__a'); if (a) a.style.maxHeight = null; }
        });
        item.classList.toggle('open', !open);
        var ans = item.querySelector('.faq__a');
        if (ans) ans.style.maxHeight = open ? null : ans.scrollHeight + 'px';
      });
    });
  }

  /* ---------- Cart ---------- */
  var CART_KEY = 'sealegs_cart_v1';
  function getCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch (e) { return []; } }
  function setCart(c) { try { localStorage.setItem(CART_KEY, JSON.stringify(c)); } catch (e) {} renderCart(); }
  function cartCount(c) { return c.reduce(function (s, i) { return s + i.qty; }, 0); }
  function money(n) { return '$' + n.toFixed(2); }

  function renderCart() {
    var c = getCart();
    var count = cartCount(c);
    document.querySelectorAll('.cart-count').forEach(function (el) {
      el.textContent = count; el.classList.toggle('show', count > 0);
    });
    var body = document.querySelector('#cartBody');
    var totalEl = document.querySelector('#cartTotal');
    if (!body) return;
    if (!c.length) {
      body.innerHTML = '<div class="cart-empty"><p style="font-size:15px;font-weight:700;color:var(--text-secondary)">Your cart is empty</p><p style="font-size:13px;margin-top:6px">Stay balanced. Stay energized.</p></div>';
      if (totalEl) totalEl.textContent = money(0);
      return;
    }
    body.innerHTML = c.map(function (i, idx) {
      return '<div class="line-item">' +
        '<img src="' + i.img + '" alt="">' +
        '<div style="flex:1">' +
          '<div style="display:flex;justify-content:space-between;gap:10px"><b style="font-size:14px">' + i.name + '</b><button data-rm="' + idx + '" style="background:none;border:none;color:var(--text-tertiary);cursor:pointer;font-size:13px">Remove</button></div>' +
          '<div style="font-size:13px;color:var(--text-tertiary);margin:2px 0 8px">' + (i.variant || 'Fruit Punch') + '</div>' +
          '<div style="display:flex;align-items:center;justify-content:space-between">' +
            '<div class="qty-mini"><button data-dec="' + idx + '">–</button><span>' + i.qty + '</span><button data-inc="' + idx + '">+</button></div>' +
            '<b style="font-size:14px">' + money(i.price * i.qty) + '</b>' +
          '</div>' +
        '</div></div>';
    }).join('');
    var total = c.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    if (totalEl) totalEl.textContent = money(total);
    body.querySelectorAll('[data-rm]').forEach(function (b) { b.onclick = function () { var c = getCart(); c.splice(+b.getAttribute('data-rm'), 1); setCart(c); }; });
    body.querySelectorAll('[data-inc]').forEach(function (b) { b.onclick = function () { var c = getCart(); c[+b.getAttribute('data-inc')].qty++; setCart(c); }; });
    body.querySelectorAll('[data-dec]').forEach(function (b) { b.onclick = function () { var c = getCart(); var i = +b.getAttribute('data-dec'); c[i].qty--; if (c[i].qty < 1) c.splice(i, 1); setCart(c); }; });
  }

  function addToCart(item) {
    var c = getCart();
    var ex = c.find(function (i) { return i.id === item.id && i.variant === item.variant; });
    if (ex) ex.qty += item.qty; else c.push(item);
    setCart(c);
    openDrawer();
    toast(item.name + ' added to cart');
  }

  function openDrawer() { var d = document.querySelector('#cartDrawer'), s = document.querySelector('#scrim'); if (d) d.classList.add('open'); if (s) s.classList.add('open'); }
  function closeDrawer() { var d = document.querySelector('#cartDrawer'), s = document.querySelector('#scrim'); if (d) d.classList.remove('open'); if (s) s.classList.remove('open'); }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = document.querySelector('#toast');
    if (!t) return;
    t.querySelector('.toast__msg').textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }

  /* ---------- Wire up ---------- */
  function initUI() {
    document.querySelectorAll('[data-add-to-cart]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sel = btn.getAttribute('data-qty-target');
        var qtyEl = sel ? document.querySelector(sel) : null;
        var qty = qtyEl ? parseInt(qtyEl.textContent || qtyEl.value || '1', 10) : (parseInt(btn.getAttribute('data-qty'), 10) || 1);
        addToCart({
          id: btn.getAttribute('data-id') || 'electrolytes',
          name: btn.getAttribute('data-name') || 'Electrolytes + Caffeine',
          price: parseFloat(btn.getAttribute('data-price') || '30'),
          img: btn.getAttribute('data-img') || 'assets/product-tub.jpg',
          variant: btn.getAttribute('data-variant') || 'Fruit Punch',
          qty: qty || 1
        });
      });
    });
    document.querySelectorAll('[data-open-cart]').forEach(function (b) { b.addEventListener('click', openDrawer); });
    document.querySelectorAll('[data-close-cart]').forEach(function (b) { b.addEventListener('click', closeDrawer); });

    // quantity steppers
    document.querySelectorAll('[data-stepper]').forEach(function (s) {
      var val = s.querySelector('[data-val]');
      s.querySelector('[data-plus]').addEventListener('click', function () { val.textContent = (parseInt(val.textContent, 10) + 1); });
      s.querySelector('[data-minus]').addEventListener('click', function () { val.textContent = Math.max(1, parseInt(val.textContent, 10) - 1); });
    });

    // mobile menu
    var burger = document.querySelector('.nav__burger'), mm = document.querySelector('#mobileMenu');
    if (burger && mm) burger.addEventListener('click', function () {
      var open = mm.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    if (mm) mm.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { mm.classList.remove('open'); document.body.style.overflow = ''; }); });

    // sticky buy bar (product page)
    var sticky = document.querySelector('#stickyBuy'), anchor = document.querySelector('#buyBox');
    if (sticky && anchor) {
      var checkSticky = function () {
        var r = anchor.getBoundingClientRect();
        sticky.classList.toggle('show', r.bottom < 80);
      };
      window.addEventListener('scroll', checkSticky, { passive: true });
      checkSticky();
    }

    renderCart();
  }

  /* ---------- Scroll-reactive ambient glow ---------- */
  function initBgGlow() {
    if (document.querySelector('.bg-glow')) return;
    var glow = document.createElement('div');
    glow.className = 'bg-glow';
    glow.setAttribute('aria-hidden', 'true');
    glow.innerHTML = '<b class="g1"></b><b class="g2"></b><b class="g3"></b>';
    document.body.appendChild(glow);
    if (rm) return;
    var cur = 0, target = 0, ticking = false;
    function compute() {
      var y = window.scrollY || document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      target = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0;
    }
    function loop() {
      cur += (target - cur) * 0.08;            // eased follow
      if (Math.abs(target - cur) < 0.0005) { cur = target; ticking = false; }
      document.documentElement.style.setProperty('--sp', cur.toFixed(4));
      if (ticking) requestAnimationFrame(loop);
    }
    function kick() { compute(); if (!ticking) { ticking = true; requestAnimationFrame(loop); } }
    window.addEventListener('scroll', kick, { passive: true });
    window.addEventListener('resize', kick);
    compute(); cur = target; document.documentElement.style.setProperty('--sp', cur.toFixed(4));
    kick();
  }

  function boot() { initBgGlow(); initReveal(); initScrollChrome(); initParallax(); initCounters(); initBubbles(); initFaq(); initUI(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
