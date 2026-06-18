import React from 'react';

/** DayMaker Badge — small status pill. Semantic tones map to Go/Caution/Avoid. */
export function Badge({ tone = 'neutral', solid = false, children, style = {}, ...rest }) {
  const tones = {
    neutral: { fg: 'var(--text-secondary)', bg: 'var(--surface-3)' },
    accent:  { fg: 'var(--accent)', bg: 'var(--accent-soft)' },
    go:      { fg: 'var(--go)', bg: 'var(--go-soft)' },
    caution: { fg: 'var(--caution)', bg: 'var(--caution-soft)' },
    avoid:   { fg: 'var(--avoid)', bg: 'var(--avoid-soft)' },
    info:    { fg: 'var(--info)', bg: 'var(--info-soft)' },
  };
  const t = tones[tone] || tones.neutral;
  const solidFg = { neutral: 'var(--ink-900)', accent: 'var(--text-on-accent)', go: 'var(--text-on-accent)', caution: '#2A1700', avoid: '#2A0307', info: '#021428' };
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-4)',
        height: 20, padding: '0 8px',
        fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-badge)',
        fontWeight: 'var(--fw-bold)', letterSpacing: '0.04em', textTransform: 'uppercase',
        borderRadius: 'var(--r-full)',
        color: solid ? solidFg[tone] : t.fg,
        background: solid ? t.fg.replace('var(--text-secondary)', 'var(--ink-200)') : t.bg,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
