import React from 'react';

/**
 * DayMaker Input — pill search field or standard text input with the
 * signature recessed inset border. Optional leading/trailing icons.
 */
export function Input({
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
  const ring = invalid
    ? 'inset 0 0 0 1px var(--avoid)'
    : focused
      ? 'inset 0 0 0 2px var(--accent)'
      : 'inset 0 0 0 1px var(--border-strong)';
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 'var(--sp-10)',
      height: h, padding: shape === 'pill' ? '0 20px' : '0 14px',
      background: 'var(--surface-inset)', borderRadius: radius,
      boxShadow: ring, transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      ...containerStyle,
    }}>
      {iconLeft && <span style={{ display: 'flex', color: 'var(--text-tertiary)', flex: 'none' }}>{iconLeft}</span>}
      <input
        onFocus={(e) => { setFocused(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocused(false); rest.onBlur && rest.onBlur(e); }}
        style={{
          flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none',
          background: 'transparent', color: 'var(--text-base)',
          fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-body)',
          ...style,
        }}
        {...rest}
      />
      {iconRight && <span style={{ display: 'flex', color: 'var(--text-tertiary)', flex: 'none' }}>{iconRight}</span>}
    </div>
  );
}
