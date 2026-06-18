import React from 'react';

/**
 * DayMaker Metric — a numeric readout: big tabular value + unit, with
 * a label and optional trend. The core building block of marine data.
 */
export function Metric({
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
  const sizes = { sm: 22, md: 34, lg: 52 };
  const tones = { default: 'var(--text-base)', accent: 'var(--accent)', caution: 'var(--caution)', avoid: 'var(--avoid)', info: 'var(--info)' };
  const trendColor = trend && trend.dir === 'up' ? 'var(--go)' : trend && trend.dir === 'down' ? 'var(--avoid)' : 'var(--text-tertiary)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', ...style }} {...rest}>
      {label != null && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-6)',
          fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-label)',
          textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          {icon}{label}
        </span>
      )}
      <span style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--sp-4)', fontFamily: 'var(--font-ui)',
        fontVariantNumeric: 'tabular-nums', lineHeight: 1, color: tones[tone] || tones.default }}>
        <span style={{ fontSize: sizes[size], fontWeight: 'var(--fw-black)', letterSpacing: '-0.01em' }}>{value}</span>
        {unit && <span style={{ fontSize: sizes[size] * 0.42, fontWeight: 'var(--fw-bold)', color: 'var(--text-secondary)' }}>{unit}</span>}
      </span>
      {(sub || trend) && (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-6)', fontSize: 'var(--fs-small)', color: 'var(--text-tertiary)' }}>
          {trend && <span style={{ color: trendColor, fontWeight: 'var(--fw-bold)' }}>{trend.dir === 'up' ? '▲' : trend.dir === 'down' ? '▼' : '–'} {trend.value}</span>}
          {sub}
        </span>
      )}
    </div>
  );
}
