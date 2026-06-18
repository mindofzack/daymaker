import React from 'react';

/**
 * DayMaker SegmentedControl — pill of mutually-exclusive options.
 * The selected segment lifts onto a surface chip.
 */
export function SegmentedControl({ options = [], value, onChange, size = 'md', style = {}, ...rest }) {
  const h = size === 'sm' ? 32 : 40;
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div
      role="tablist"
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 2,
        padding: 3, height: h, background: 'var(--surface-inset)',
        borderRadius: 'var(--r-full)', boxShadow: 'inset 0 0 0 1px var(--border)',
        ...style,
      }}
      {...rest}
    >
      {norm.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value} role="tab" aria-selected={active}
            onClick={() => onChange && onChange(o.value)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-6)',
              height: '100%', padding: '0 16px', border: 'none',
              borderRadius: 'var(--r-full)', cursor: 'pointer', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-button)',
              fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
              background: active ? 'var(--surface-3)' : 'transparent',
              color: active ? 'var(--text-base)' : 'var(--text-secondary)',
              boxShadow: active ? 'var(--shadow-card)' : 'none',
              transition: 'color var(--dur-base) var(--ease-standard), background var(--dur-base) var(--ease-standard)',
            }}
          >
            {o.icon}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
