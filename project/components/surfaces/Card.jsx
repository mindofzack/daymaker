import React from 'react';

/**
 * DayMaker Card — base surface container. Hover lift optional.
 * Album-art style media slot via `media`.
 */
export function Card({
  elevated = false,
  hoverable = false,
  padding = 16,
  media = null,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: hoverable && hover ? 'var(--surface-3)' : 'var(--surface-1)',
        borderRadius: 'var(--r-card)', overflow: 'hidden',
        boxShadow: (elevated || (hoverable && hover)) ? 'var(--shadow-card)' : 'none',
        transform: hoverable && hover ? 'translateY(-2px)' : 'none',
        transition: 'background var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        cursor: hoverable ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {media && <div style={{ width: '100%', aspectRatio: '16 / 10', overflow: 'hidden', background: 'var(--surface-3)' }}>{media}</div>}
      <div style={{ padding }}>{children}</div>
    </div>
  );
}
