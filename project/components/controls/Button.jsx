import React from 'react';

/**
 * DayMaker Button — pill-shaped action. Aqua primary is the singular
 * functional accent; everything else is achromatic on dark.
 */
export function Button({
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
    sm: { height: 32, padding: '0 16px', font: 'var(--fs-small)' },
    md: { height: 44, padding: '0 24px', font: 'var(--fs-button)' },
    lg: { height: 52, padding: '0 36px', font: 'var(--fs-body)' },
  };
  const variants = {
    primary: { background: 'var(--accent)', color: 'var(--text-on-accent)', border: '1px solid transparent' },
    secondary: { background: 'var(--surface-2)', color: 'var(--text-base)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-base)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent' },
    danger: { background: 'var(--avoid)', color: '#2A0307', border: '1px solid transparent' },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;

  return (
    <button
      disabled={disabled}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: 'var(--sp-8)',
        height: s.height, padding: s.padding,
        width: fullWidth ? '100%' : 'auto',
        fontFamily: 'var(--font-ui)', fontSize: s.font,
        fontWeight: 'var(--fw-bold)',
        letterSpacing: uppercase ? 'var(--ls-button)' : '0.01em',
        textTransform: uppercase ? 'uppercase' : 'none',
        lineHeight: 1, whiteSpace: 'nowrap',
        borderRadius: 'var(--r-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'transform var(--dur-fast) var(--ease-standard), background var(--dur-base) var(--ease-standard), filter var(--dur-base) var(--ease-standard)',
        ...v, ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      onMouseEnter={(e) => { if (!disabled && variant === 'primary') e.currentTarget.style.filter = 'brightness(1.08)'; }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
