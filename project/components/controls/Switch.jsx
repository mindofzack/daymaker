import React from 'react';

/** DayMaker Switch — pill toggle. Aqua track when on. */
export function Switch({ checked = false, onChange, disabled = false, label, style = {}, ...rest }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-12)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        role="switch" aria-checked={checked}
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          position: 'relative', width: 44, height: 26, flex: 'none',
          borderRadius: 'var(--r-full)',
          background: checked ? 'var(--accent)' : 'var(--ink-600)',
          boxShadow: checked ? 'none' : 'inset 0 0 0 1px var(--border-strong)',
          transition: 'background var(--dur-base) var(--ease-standard)',
        }}
        {...rest}
      >
        <span style={{
          position: 'absolute', top: 3, left: checked ? 21 : 3,
          width: 20, height: 20, borderRadius: 'var(--r-circle)',
          background: checked ? 'var(--text-on-accent)' : 'var(--ink-100)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label != null && <span style={{ fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-caption)', color: 'var(--text-base)' }}>{label}</span>}
    </label>
  );
}
