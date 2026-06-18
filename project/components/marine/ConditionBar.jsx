import React from 'react';

/**
 * DayMaker ConditionBar — horizontal gauge for a 0–100 condition score
 * or model-agreement confidence. Color shifts Go -> Caution -> Avoid.
 */
export function ConditionBar({
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
  const colors = { go: 'var(--go)', caution: 'var(--caution)', avoid: 'var(--avoid)', info: 'var(--info)' };
  const c = colors[which] || colors.go;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-8)', ...style }} {...rest}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          {label && <span style={{ fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>{label}</span>}
          {showValue && <span style={{ fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-black)', fontVariantNumeric: 'tabular-nums', color: c }}>{v}</span>}
        </div>
      )}
      <div style={{ position: 'relative', height, borderRadius: 'var(--r-full)', background: 'var(--surface-inset)', boxShadow: 'inset 0 0 0 1px var(--border)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, width: v + '%', borderRadius: 'var(--r-full)',
          background: c, boxShadow: which === 'go' ? '0 0 12px rgba(22,224,166,0.5)' : 'none',
          transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
    </div>
  );
}
