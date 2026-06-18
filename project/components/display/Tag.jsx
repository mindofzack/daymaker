import React from 'react';

/** DayMaker Tag — filter / category chip. Selectable. */
export function Tag({ selected = false, onClick, removable = false, onRemove, children, style = {}, ...rest }) {
  const interactive = !!onClick;
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--sp-6)',
        height: 32, padding: '0 14px',
        fontFamily: 'var(--font-ui)', fontSize: 'var(--fs-button)',
        fontWeight: selected ? 'var(--fw-bold)' : 'var(--fw-medium)',
        borderRadius: 'var(--r-full)', whiteSpace: 'nowrap',
        cursor: interactive ? 'pointer' : 'default',
        color: selected ? 'var(--text-on-accent)' : 'var(--text-base)',
        background: selected ? 'var(--accent)' : 'var(--surface-2)',
        boxShadow: selected ? 'none' : 'inset 0 0 0 1px var(--border)',
        transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {children}
      {removable && (
        <span onClick={(e) => { e.stopPropagation(); onRemove && onRemove(); }}
          style={{ display: 'inline-flex', opacity: 0.7, fontSize: 16, lineHeight: 1, marginRight: -2 }}>×</span>
      )}
    </span>
  );
}
