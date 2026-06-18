import React from 'react';

/** DayMaker Avatar — circular user/vessel image or initials. */
export function Avatar({ src, name = '', size = 40, ring = false, style = {}, ...rest }) {
  const initials = name.split(' ').map((w) => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, flex: 'none', borderRadius: 'var(--r-circle)',
        overflow: 'hidden', background: 'var(--surface-3)', color: 'var(--text-secondary)',
        fontFamily: 'var(--font-ui)', fontSize: size * 0.4, fontWeight: 'var(--fw-bold)',
        boxShadow: ring ? '0 0 0 2px var(--bg-base), 0 0 0 4px var(--accent)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
