import React from 'react';

/**
 * DayMaker IconButton — circular icon-only control (play, nav, more).
 * Pass an SVG/icon node as children.
 */
export function IconButton({
  variant = 'surface',
  size = 'md',
  label,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = { sm: 32, md: 40, lg: 56 };
  const variants = {
    surface: { background: 'var(--surface-2)', color: 'var(--text-base)' },
    accent: { background: 'var(--accent)', color: 'var(--text-on-accent)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)' },
    outline: { background: 'transparent', color: 'var(--text-base)', boxShadow: 'inset 0 0 0 1px var(--border-strong)' },
  };
  const d = sizes[size] || sizes.md;
  const v = variants[variant] || variants.surface;
  return (
    <button
      aria-label={label}
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: d, height: d, borderRadius: 'var(--r-circle)', border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-standard), filter var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
        ...v, ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.92)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(1.12)'; }}
      {...rest}
    >
      {children}
    </button>
  );
}
