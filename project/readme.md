# DayMaker — Design System & Website

**DayMaker** is a hydration + energy brand. The hero product is **DayMaker Electrolytes + Caffeine** (Fruit Punch, $30) — a sugar-free powder that pairs fast electrolytes (1000 mg sodium from pink Himalayan salt, 80 mg magnesium, 225 mg potassium) with 150 mg natural caffeine from coffee bean. There's also a **Performance Hat**. The promise: *"One drink. Hydration + energy."* — replace your sports drink, energy drink, and coffee with one clean scoop.

Brand line: **"Detox to Retox. Stay balanced. Stay energized."** · **"Hydration Meets Energy."** · **"Stay out late. Show up early."**

**Source:** live site `https://sealegs.io` (Shopify). Real product photography, benefit icons, and the white wordmark were pulled into `website/assets/` and `assets/`. Affiliate program runs on UpPromote.

---

## Content fundamentals
- **Voice:** punchy, confident, active. Short declaratives and imperatives ("Scoop. Mix. Go.", "Fuel your day, the DayMaker way."). Speaks to *you*.
- **Casing:** Title/sentence case for headlines; **UPPERCASE + wide tracking** for button labels, eyebrows, and the announcement bar — the systematic "label voice."
- **Claims:** concrete and dosed (real mg amounts), reassuring ("sugar-free", "no jitters", "no BS", "made in the USA"). Never hypey or medical.
- **Emoji:** none. Iconography carries visual accents instead.

## Visual foundations
- **Theme:** content-first darkness. Near-black surfaces (`--bg-base #0C0F11` → `--surface-4`) — matches the matte-black product tub. UI recedes; product + accents glow.
- **Accents (two, functional only):** **aqua `--accent #16E0A6`** = hydration / primary CTA / brand mark; **coral `--punch #FF6A52`** = fruit-punch energy / urgency. Plus Go-Caution-Avoid semantics and an ocean data ramp.
- **Type:** `Figtree` (geometric-humanist, **substitute for the brand's Circular-style face — flag if you have the licensed font**) for UI + heavy display; `JetBrains Mono` for numerics. Bold/regular binary; compact, functional sizing; display weights 800–900.
- **Geometry:** pill-and-circle. Pill buttons (`--r-pill 500px`), circular icon buttons (50%), gentle 12–20px card radii. Square corners break the identity.
- **Depth:** heavy shadows (0.3–0.5 opacity) — light shadows vanish on near-black. Inset border-shadow on inputs.
- **Motion (website):** drifting gradient orbs, floating product with pointer-tilt + scroll parallax, rising bubbles, scrolling marquee bands, scroll-reveal (fade/slide/scale), animated counters, sticky buy bar, slide-in cart. Spring easing `cubic-bezier(0.16,1,0.3,1)`. All gated on `prefers-reduced-motion` with a bulletproof reveal fallback so content never stays hidden.
- **Imagery:** real lifestyle/product photography, warm daylight, shallow depth of field, full-bleed in rounded frames with protection gradients.

## Iconography
- **UI glyphs:** inline stroke SVGs, 2px stroke, rounded joins (Lucide-style, hand-inlined) — cart, nav, social, check, truck, shield, etc.
- **Brand benefit icons:** rich illustrated aqua icons from the live site, in `website/assets/` (`icon-hydration/energy/focus/recovery.png`).
- **Logos:** `assets/logo/` holds recolored marks (wordmark, lockup, mark) in white/ink/aqua; `website/assets/logo-circle.png` is the white horizontal "DAYMAKER" lockup used in nav + footer.

---

## Index
- `styles.css` — global entry (imports only). Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadows.css`, `fonts.css`, `base.css`.
- `foundations/` — Design System tab specimen cards (Colors).
- `components/` — React primitives: `controls/` (Button, IconButton, Switch, SegmentedControl), `forms/` (Input), `display/` (Badge, Tag, Avatar, Metric), `surfaces/` (Card), `marine/` (Recommendation, ConditionBar — generic verdict/score primitives; see caveat).
- `website/` — **the 5-page marketing site** (main deliverable): `index.html` (Home), `product.html` (Electrolytes + Caffeine PDP), `shop.html`, `affiliates.html`, `about.html`, plus shared `site.css` + `site.js` and `assets/`.
- `assets/` — logos and brand marks.

### Caveat
The `components/marine/` primitives (`Recommendation` with Go/Caution/Avoid, `ConditionBar`) and `Metric` were authored before the brand was confirmed as a beverage company; they read as generic data components rather than DayMaker-specific UI. They're harmless and reusable, but if you want a fully on-brand kit they should be replaced with commerce primitives (e.g. ProductCard, PriceTag, ReviewStars, NutritionRow). Say the word and I'll swap them.
