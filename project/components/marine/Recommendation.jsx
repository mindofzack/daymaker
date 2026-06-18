import React from 'react';

/**
 * DayMaker Recommendation — the signature verdict component.
 * Renders a Go / Caution / Avoid call with plain-English summary.
 * verdict: 'go' | 'caution' | 'avoid'.
 */
export function Recommendation({
  verdict = 'go',
  title,
  summary,
  window: timeWindow,
  variant = 'card',
  style = {},
  ...rest
}) {
  const map = {
    go:      { label: 'GO',      color: 'var(--go)',      soft: 'var(--go-soft)',      ink: 'var(--text-on-accent)', glyph: '↗' },
    caution: { label: 'CAUTION', color: 'var(--caution)', soft: 'var(--caution-soft)', ink: '#2A1700', glyph: '!' },
    avoid:   { label: 'AVOID',   color: 'var(--avoid)',   soft: 'var(--avoid-soft)',   ink: '#2A0307', glyph: '✕' },
  };
  const v = map[verdict] || map.go;

  if (variant === 'pill') {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-8)', height: 32, padding: '0 14px 0 6px',
        borderRadius: 'var(--r-full)', background: v.soft, ...style }} {...rest}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22,
          borderRadius: 'var(--r-circle)', background: v.color, color: v.ink, fontWeight: 'var(--fw-black)', fontSize: 13 }}>{v.glyph}</span>
        <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-button)', fontWeight: 'var(--fw-bold)', letterSpacing: 'var(--ls-button)', color: v.color }}>{v.label}</span>
      </span>
    );
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--r-card)', background: 'var(--surface-1)',
      boxShadow: `inset 4px 0 0 ${v.color}, var(--shadow-card)`, padding: 'var(--sp-20)', ...style }} {...rest}>
      <div style={{ position: 'absolute', inset: 0, background: v.soft, opacity: 0.5, pointerEvents: 'none' }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', gap: 'var(--sp-16)' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 52, height: 52, flex: 'none',
          borderRadius: 'var(--r-circle)', background: v.color, color: v.ink, fontSize: 24, fontWeight: 'var(--fw-black)',
          boxShadow: verdict === 'go' ? 'var(--shadow-accent-glow)' : 'none' }}>{v.glyph}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-10)', marginBottom: 'var(--sp-4)' }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: 'var(--fs-feature)', fontWeight: 'var(--fw-black)', letterSpacing: 'var(--ls-button)', color: v.color }}>{v.label}</span>
            {timeWindow && <span style={{ fontSize: 'var(--fs-small)', fontWeight: 'var(--fw-bold)', color: 'var(--text-tertiary)' }}>{timeWindow}</span>}
          </div>
          {title && <div style={{ fontSize: 'var(--fs-body)', fontWeight: 'var(--fw-bold)', color: 'var(--text-base)', marginBottom: 'var(--sp-4)' }}>{title}</div>}
          {summary && <div style={{ fontSize: 'var(--fs-caption)', lineHeight: 'var(--lh-body)', color: 'var(--text-secondary)' }}>{summary}</div>}
        </div>
      </div>
    </div>
  );
}
