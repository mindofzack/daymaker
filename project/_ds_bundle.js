/* @ds-bundle: {"format":3,"namespace":"SeaLegsDesignSystem_a9cfbb","components":[{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"IconButton","sourcePath":"components/controls/IconButton.jsx"},{"name":"SegmentedControl","sourcePath":"components/controls/SegmentedControl.jsx"},{"name":"Switch","sourcePath":"components/controls/Switch.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Metric","sourcePath":"components/display/Metric.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ConditionBar","sourcePath":"components/marine/ConditionBar.jsx"},{"name":"Recommendation","sourcePath":"components/marine/Recommendation.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/controls/Button.jsx":"09cd6ba14a11","components/controls/IconButton.jsx":"7ef187ba053d","components/controls/SegmentedControl.jsx":"df060237bae7","components/controls/Switch.jsx":"09f28d1f2193","components/display/Avatar.jsx":"924f86cc946a","components/display/Badge.jsx":"0d105b69b4e8","components/display/Metric.jsx":"94c077c34898","components/display/Tag.jsx":"b73ae6bf778b","components/forms/Input.jsx":"cb94350606df","components/marine/ConditionBar.jsx":"452c0a93976f","components/marine/Recommendation.jsx":"dedf4cf1a16c","components/surfaces/Card.jsx":"2e63e5abf474","website/site.js":"c7cf24dee4cd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SeaLegsDesignSystem_a9cfbb = window.SeaLegsDesignSystem_a9cfbb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/controls/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker Button — pill-shaped action. Aqua primary is the singular
 * functional accent; everything else is achromatic on dark.
 */
function Button({
  variant = 'primary',
  size = 'md',
  uppercase = false,
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 32,
      padding: '0 16px',
      font: 'var(--fs-small)'
    },
    md: {
      height: 44,
      padding: '0 24px',
      font: 'var(--fs-button)'
    },
    lg: {
      height: 52,
      padding: '0 36px',
      font: 'var(--fs-body)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    },
    secondary: {
      background: 'var(--surface-2)',
      color: 'var(--text-base)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-base)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--avoid)',
      color: '#2A0307',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--sp-8)',
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-ui)',
      fontSize: s.font,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: uppercase ? 'var(--ls-button)' : '0.01em',
      textTransform: uppercase ? 'uppercase' : 'none',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--r-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard), filter var(--dur-base) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.filter = 'brightness(1.08)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker IconButton — circular icon-only control (play, nav, more).
 * Pass an SVG/icon node as children.
 */
function IconButton({
  variant = 'surface',
  size = 'md',
  label,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 40,
    lg: 56
  };
  const variants = {
    surface: {
      background: 'var(--surface-2)',
      color: 'var(--text-base)'
    },
    accent: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-base)',
      boxShadow: 'inset 0 0 0 1px var(--border-strong)'
    }
  };
  const d = sizes[size] || sizes.md;
  const v = variants[variant] || variants.surface;
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      borderRadius: 'var(--r-circle)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.12)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/controls/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker SegmentedControl — pill of mutually-exclusive options.
 * The selected segment lifts onto a surface chip.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  style = {},
  ...rest
}) {
  const h = size === 'sm' ? 32 : 40;
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: 3,
      height: h,
      background: 'var(--surface-inset)',
      borderRadius: 'var(--r-full)',
      boxShadow: 'inset 0 0 0 1px var(--border)',
      ...style
    }
  }, rest), norm.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(o.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-6)',
        height: '100%',
        padding: '0 16px',
        border: 'none',
        borderRadius: 'var(--r-full)',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--fs-button)',
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        background: active ? 'var(--surface-3)' : 'transparent',
        color: active ? 'var(--text-base)' : 'var(--text-secondary)',
        boxShadow: active ? 'var(--shadow-card)' : 'none',
        transition: 'color var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)'
      }
    }, o.icon, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/controls/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** DayMaker Switch — pill toggle. Aqua track when on. */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-12)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--r-full)',
      background: checked ? 'var(--accent)' : 'var(--ink-600)',
      boxShadow: checked ? 'none' : 'inset 0 0 0 1px var(--border-strong)',
      transition: 'background var(--dur-base) var(--ease-standard)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--r-circle)',
      background: checked ? 'var(--text-on-accent)' : 'var(--ink-100)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-base)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Switch.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** DayMaker Avatar — circular user/vessel image or initials. */
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: 'var(--r-circle)',
      overflow: 'hidden',
      background: 'var(--surface-3)',
      color: 'var(--text-secondary)',
      fontFamily: 'var(--font-ui)',
      fontSize: size * 0.4,
      fontWeight: 'var(--fw-bold)',
      boxShadow: ring ? '0 0 0 2px var(--bg-base), 0 0 0 4px var(--accent)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** DayMaker Badge — small status pill. Semantic tones map to Go/Caution/Avoid. */
function Badge({
  tone = 'neutral',
  solid = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      fg: 'var(--text-secondary)',
      bg: 'var(--surface-3)'
    },
    accent: {
      fg: 'var(--accent)',
      bg: 'var(--accent-soft)'
    },
    go: {
      fg: 'var(--go)',
      bg: 'var(--go-soft)'
    },
    caution: {
      fg: 'var(--caution)',
      bg: 'var(--caution-soft)'
    },
    avoid: {
      fg: 'var(--avoid)',
      bg: 'var(--avoid-soft)'
    },
    info: {
      fg: 'var(--info)',
      bg: 'var(--info-soft)'
    }
  };
  const t = tones[tone] || tones.neutral;
  const solidFg = {
    neutral: 'var(--ink-900)',
    accent: 'var(--text-on-accent)',
    go: 'var(--text-on-accent)',
    caution: '#2A1700',
    avoid: '#2A0307',
    info: '#021428'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-4)',
      height: 20,
      padding: '0 8px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-badge)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      borderRadius: 'var(--r-full)',
      color: solid ? solidFg[tone] : t.fg,
      background: solid ? t.fg.replace('var(--text-secondary)', 'var(--ink-200)') : t.bg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker Metric — a numeric readout: big tabular value + unit, with
 * a label and optional trend. The core building block of marine data.
 */
function Metric({
  label,
  value,
  unit,
  sub,
  trend,
  tone = 'default',
  icon = null,
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: 22,
    md: 34,
    lg: 52
  };
  const tones = {
    default: 'var(--text-base)',
    accent: 'var(--accent)',
    caution: 'var(--caution)',
    avoid: 'var(--avoid)',
    info: 'var(--info)'
  };
  const trendColor = trend && trend.dir === 'up' ? 'var(--go)' : trend && trend.dir === 'down' ? 'var(--avoid)' : 'var(--text-tertiary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-4)',
      ...style
    }
  }, rest), label != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, icon, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--sp-4)',
      fontFamily: 'var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1,
      color: tones[tone] || tones.default
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes[size],
      fontWeight: 'var(--fw-black)',
      letterSpacing: '-0.01em'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: sizes[size] * 0.42,
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-secondary)'
    }
  }, unit)), (sub || trend) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      fontSize: 'var(--fs-small)',
      color: 'var(--text-tertiary)'
    }
  }, trend && /*#__PURE__*/React.createElement("span", {
    style: {
      color: trendColor,
      fontWeight: 'var(--fw-bold)'
    }
  }, trend.dir === 'up' ? '▲' : trend.dir === 'down' ? '▼' : '–', " ", trend.value), sub));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Metric.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** DayMaker Tag — filter / category chip. Selectable. */
function Tag({
  selected = false,
  onClick,
  removable = false,
  onRemove,
  children,
  style = {},
  ...rest
}) {
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-6)',
      height: 32,
      padding: '0 14px',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-button)',
      fontWeight: selected ? 'var(--fw-bold)' : 'var(--fw-medium)',
      borderRadius: 'var(--r-full)',
      whiteSpace: 'nowrap',
      cursor: interactive ? 'pointer' : 'default',
      color: selected ? 'var(--text-on-accent)' : 'var(--text-base)',
      background: selected ? 'var(--accent)' : 'var(--surface-2)',
      boxShadow: selected ? 'none' : 'inset 0 0 0 1px var(--border)',
      transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      opacity: 0.7,
      fontSize: 16,
      lineHeight: 1,
      marginRight: -2
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker Input — pill search field or standard text input with the
 * signature recessed inset border. Optional leading/trailing icons.
 */
function Input({
  shape = 'pill',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  invalid = false,
  style = {},
  containerStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const h = size === 'sm' ? 38 : size === 'lg' ? 52 : 44;
  const radius = shape === 'pill' ? 'var(--r-pill)' : 'var(--r-xs)';
  const ring = invalid ? 'inset 0 0 0 1px var(--avoid)' : focused ? 'inset 0 0 0 2px var(--accent)' : 'inset 0 0 0 1px var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-10)',
      height: h,
      padding: shape === 'pill' ? '0 20px' : '0 14px',
      background: 'var(--surface-inset)',
      borderRadius: radius,
      boxShadow: ring,
      transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      ...containerStyle
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-tertiary)',
      flex: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      color: 'var(--text-base)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--fs-body)',
      ...style
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      color: 'var(--text-tertiary)',
      flex: 'none'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/marine/ConditionBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker ConditionBar — horizontal gauge for a 0–100 condition score
 * or model-agreement confidence. Color shifts Go -> Caution -> Avoid.
 */
function ConditionBar({
  value = 0,
  label,
  showValue = true,
  tone,
  height = 8,
  style = {},
  ...rest
}) {
  const v = Math.max(0, Math.min(100, value));
  const auto = v >= 66 ? 'go' : v >= 33 ? 'caution' : 'avoid';
  const which = tone || auto;
  const colors = {
    go: 'var(--go)',
    caution: 'var(--caution)',
    avoid: 'var(--avoid)',
    info: 'var(--info)'
  };
  const c = colors[which] || colors.go;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-8)',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-black)',
      fontVariantNumeric: 'tabular-nums',
      color: c
    }
  }, v)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      borderRadius: 'var(--r-full)',
      background: 'var(--surface-inset)',
      boxShadow: 'inset 0 0 0 1px var(--border)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: v + '%',
      borderRadius: 'var(--r-full)',
      background: c,
      boxShadow: which === 'go' ? '0 0 12px rgba(22,224,166,0.5)' : 'none',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ConditionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marine/ConditionBar.jsx", error: String((e && e.message) || e) }); }

// components/marine/Recommendation.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker Recommendation — the signature verdict component.
 * Renders a Go / Caution / Avoid call with plain-English summary.
 * verdict: 'go' | 'caution' | 'avoid'.
 */
function Recommendation({
  verdict = 'go',
  title,
  summary,
  window: timeWindow,
  variant = 'card',
  style = {},
  ...rest
}) {
  const map = {
    go: {
      label: 'GO',
      color: 'var(--go)',
      soft: 'var(--go-soft)',
      ink: 'var(--text-on-accent)',
      glyph: '↗'
    },
    caution: {
      label: 'CAUTION',
      color: 'var(--caution)',
      soft: 'var(--caution-soft)',
      ink: '#2A1700',
      glyph: '!'
    },
    avoid: {
      label: 'AVOID',
      color: 'var(--avoid)',
      soft: 'var(--avoid-soft)',
      ink: '#2A0307',
      glyph: '✕'
    }
  };
  const v = map[verdict] || map.go;
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--sp-8)',
        height: 32,
        padding: '0 14px 0 6px',
        borderRadius: 'var(--r-full)',
        background: v.soft,
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 22,
        height: 22,
        borderRadius: 'var(--r-circle)',
        background: v.color,
        color: v.ink,
        fontWeight: 'var(--fw-black)',
        fontSize: 13
      }
    }, v.glyph), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--fs-button)',
        fontWeight: 'var(--fw-bold)',
        letterSpacing: 'var(--ls-button)',
        color: v.color
      }
    }, v.label));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--r-card)',
      background: 'var(--surface-1)',
      boxShadow: `inset 4px 0 0 ${v.color}, var(--shadow-card)`,
      padding: 'var(--sp-20)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: v.soft,
      opacity: 0.5,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--sp-16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      flex: 'none',
      borderRadius: 'var(--r-circle)',
      background: v.color,
      color: v.ink,
      fontSize: 24,
      fontWeight: 'var(--fw-black)',
      boxShadow: verdict === 'go' ? 'var(--shadow-accent-glow)' : 'none'
    }
  }, v.glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-10)',
      marginBottom: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-title)',
      fontSize: 'var(--fs-feature)',
      fontWeight: 'var(--fw-black)',
      letterSpacing: 'var(--ls-button)',
      color: v.color
    }
  }, v.label), timeWindow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-tertiary)'
    }
  }, timeWindow)), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-base)',
      marginBottom: 'var(--sp-4)'
    }
  }, title), summary && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-secondary)'
    }
  }, summary))));
}
Object.assign(__ds_scope, { Recommendation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marine/Recommendation.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DayMaker Card — base surface container. Hover lift optional.
 * Album-art style media slot via `media`.
 */
function Card({
  elevated = false,
  hoverable = false,
  padding = 16,
  media = null,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: hoverable && hover ? 'var(--surface-3)' : 'var(--surface-1)',
      borderRadius: 'var(--r-card)',
      overflow: 'hidden',
      boxShadow: elevated || hoverable && hover ? 'var(--shadow-card)' : 'none',
      transform: hoverable && hover ? 'translateY(-2px)' : 'none',
      transition: 'background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      cursor: hoverable ? 'pointer' : 'default',
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--surface-3)'
    }
  }, media), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// website/site.js
try { (() => {
/* ============================================================
   DAYMAKER — site interactions & motion
   ============================================================ */
(function () {
  'use strict';

  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Scroll reveal (manual viewport check — bulletproof) ---------- */
  function initReveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (rm) {
      els.forEach(function (e) {
        e.classList.add('in');
      });
      return;
    }
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var remaining = false;
      els.forEach(function (e) {
        if (e.classList.contains('in')) return;
        var r = e.getBoundingClientRect();
        // reveal once the element's top enters the bottom 92% of the viewport
        if (r.top < vh * 0.92 && r.bottom > 0) e.classList.add('in');else remaining = true;
      });
      return remaining;
    }
    check();
    window.addEventListener('scroll', check, {
      passive: true
    });
    window.addEventListener('resize', check);
    // a few delayed passes catch late layout/font shifts
    [120, 350, 700, 1300].forEach(function (t) {
      setTimeout(check, t);
    });
    // ultimate safety: never leave content hidden
    setTimeout(function () {
      els.forEach(function (e) {
        e.classList.add('in');
      });
    }, 2600);
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
        bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
      }
    }
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    onScroll();
  }

  /* ---------- Parallax (scroll + pointer) ---------- */
  function initParallax() {
    if (rm) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    var pointerEls = Array.prototype.slice.call(document.querySelectorAll('[data-tilt]'));
    var py = 0,
      px = 0,
      ticking = false;
    function apply() {
      ticking = false;
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.2;
        var r = el.getBoundingClientRect();
        var center = r.top + r.height / 2 - vh / 2;
        el.style.transform = 'translate3d(0,' + -center * speed + 'px,0)';
      });
      pointerEls.forEach(function (el) {
        var amt = parseFloat(el.getAttribute('data-tilt')) || 12;
        el.style.transform = 'translate3d(' + px * amt + 'px,' + py * amt + 'px,0)';
      });
    }
    function request() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    }
    window.addEventListener('scroll', request, {
      passive: true
    });
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
      var dur = 1400,
        start = null;
      if (rm) {
        el.textContent = target.toFixed(dec);
        return;
      }
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(step);else el.textContent = target.toFixed(dec);
      }
      requestAnimationFrame(step);
    }
    if (rm) {
      els.forEach(function (e) {
        run(e);
      });
      return;
    }
    var done = [];
    function check() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (e) {
        if (done.indexOf(e) > -1) return;
        var r = e.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          done.push(e);
          run(e);
        }
      });
    }
    check();
    window.addEventListener('scroll', check, {
      passive: true
    });
    [200, 600, 1300].forEach(function (t) {
      setTimeout(check, t);
    });
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
      b.style.animationDuration = 7 + Math.random() * 10 + 's';
      b.style.animationDelay = -Math.random() * 12 + 's';
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
          if (o !== item) {
            o.classList.remove('open');
            var a = o.querySelector('.faq__a');
            if (a) a.style.maxHeight = null;
          }
        });
        item.classList.toggle('open', !open);
        var ans = item.querySelector('.faq__a');
        if (ans) ans.style.maxHeight = open ? null : ans.scrollHeight + 'px';
      });
    });
  }

  /* ---------- Cart ---------- */
  var CART_KEY = 'sealegs_cart_v1';
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function setCart(c) {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(c));
    } catch (e) {}
    renderCart();
  }
  function cartCount(c) {
    return c.reduce(function (s, i) {
      return s + i.qty;
    }, 0);
  }
  function money(n) {
    return '$' + n.toFixed(2);
  }
  function renderCart() {
    var c = getCart();
    var count = cartCount(c);
    document.querySelectorAll('.cart-count').forEach(function (el) {
      el.textContent = count;
      el.classList.toggle('show', count > 0);
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
      return '<div class="line-item">' + '<img src="' + i.img + '" alt="">' + '<div style="flex:1">' + '<div style="display:flex;justify-content:space-between;gap:10px"><b style="font-size:14px">' + i.name + '</b><button data-rm="' + idx + '" style="background:none;border:none;color:var(--text-tertiary);cursor:pointer;font-size:13px">Remove</button></div>' + '<div style="font-size:13px;color:var(--text-tertiary);margin:2px 0 8px">' + (i.variant || 'Fruit Punch') + '</div>' + '<div style="display:flex;align-items:center;justify-content:space-between">' + '<div class="qty-mini"><button data-dec="' + idx + '">–</button><span>' + i.qty + '</span><button data-inc="' + idx + '">+</button></div>' + '<b style="font-size:14px">' + money(i.price * i.qty) + '</b>' + '</div>' + '</div></div>';
    }).join('');
    var total = c.reduce(function (s, i) {
      return s + i.price * i.qty;
    }, 0);
    if (totalEl) totalEl.textContent = money(total);
    body.querySelectorAll('[data-rm]').forEach(function (b) {
      b.onclick = function () {
        var c = getCart();
        c.splice(+b.getAttribute('data-rm'), 1);
        setCart(c);
      };
    });
    body.querySelectorAll('[data-inc]').forEach(function (b) {
      b.onclick = function () {
        var c = getCart();
        c[+b.getAttribute('data-inc')].qty++;
        setCart(c);
      };
    });
    body.querySelectorAll('[data-dec]').forEach(function (b) {
      b.onclick = function () {
        var c = getCart();
        var i = +b.getAttribute('data-dec');
        c[i].qty--;
        if (c[i].qty < 1) c.splice(i, 1);
        setCart(c);
      };
    });
  }
  function addToCart(item) {
    var c = getCart();
    var ex = c.find(function (i) {
      return i.id === item.id && i.variant === item.variant;
    });
    if (ex) ex.qty += item.qty;else c.push(item);
    setCart(c);
    openDrawer();
    toast(item.name + ' added to cart');
  }
  function openDrawer() {
    var d = document.querySelector('#cartDrawer'),
      s = document.querySelector('#scrim');
    if (d) d.classList.add('open');
    if (s) s.classList.add('open');
  }
  function closeDrawer() {
    var d = document.querySelector('#cartDrawer'),
      s = document.querySelector('#scrim');
    if (d) d.classList.remove('open');
    if (s) s.classList.remove('open');
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var t = document.querySelector('#toast');
    if (!t) return;
    t.querySelector('.toast__msg').textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      t.classList.remove('show');
    }, 2600);
  }

  /* ---------- Wire up ---------- */
  function initUI() {
    document.querySelectorAll('[data-add-to-cart]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sel = btn.getAttribute('data-qty-target');
        var qtyEl = sel ? document.querySelector(sel) : null;
        var qty = qtyEl ? parseInt(qtyEl.textContent || qtyEl.value || '1', 10) : parseInt(btn.getAttribute('data-qty'), 10) || 1;
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
    document.querySelectorAll('[data-open-cart]').forEach(function (b) {
      b.addEventListener('click', openDrawer);
    });
    document.querySelectorAll('[data-close-cart]').forEach(function (b) {
      b.addEventListener('click', closeDrawer);
    });

    // quantity steppers
    document.querySelectorAll('[data-stepper]').forEach(function (s) {
      var val = s.querySelector('[data-val]');
      s.querySelector('[data-plus]').addEventListener('click', function () {
        val.textContent = parseInt(val.textContent, 10) + 1;
      });
      s.querySelector('[data-minus]').addEventListener('click', function () {
        val.textContent = Math.max(1, parseInt(val.textContent, 10) - 1);
      });
    });

    // mobile menu
    var burger = document.querySelector('.nav__burger'),
      mm = document.querySelector('#mobileMenu');
    if (burger && mm) burger.addEventListener('click', function () {
      var open = mm.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    if (mm) mm.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mm.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // sticky buy bar (product page)
    var sticky = document.querySelector('#stickyBuy'),
      anchor = document.querySelector('#buyBox');
    if (sticky && anchor) {
      var checkSticky = function () {
        var r = anchor.getBoundingClientRect();
        sticky.classList.toggle('show', r.bottom < 80);
      };
      window.addEventListener('scroll', checkSticky, {
        passive: true
      });
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
    var cur = 0,
      target = 0,
      ticking = false;
    function compute() {
      var y = window.scrollY || document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      target = h > 0 ? Math.min(1, Math.max(0, y / h)) : 0;
    }
    function loop() {
      cur += (target - cur) * 0.08; // eased follow
      if (Math.abs(target - cur) < 0.0005) {
        cur = target;
        ticking = false;
      }
      document.documentElement.style.setProperty('--sp', cur.toFixed(4));
      if (ticking) requestAnimationFrame(loop);
    }
    function kick() {
      compute();
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(loop);
      }
    }
    window.addEventListener('scroll', kick, {
      passive: true
    });
    window.addEventListener('resize', kick);
    compute();
    cur = target;
    document.documentElement.style.setProperty('--sp', cur.toFixed(4));
    kick();
  }
  function boot() {
    initBgGlow();
    initReveal();
    initScrollChrome();
    initParallax();
    initCounters();
    initBubbles();
    initFaq();
    initUI();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);else boot();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/site.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ConditionBar = __ds_scope.ConditionBar;

__ds_ns.Recommendation = __ds_scope.Recommendation;

__ds_ns.Card = __ds_scope.Card;

})();
