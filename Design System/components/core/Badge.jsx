import React from 'react';

export function Badge({ variant = 'pill', children, style }) {
  const v = variant === 'bronze'
    ? { background: 'var(--primary)', color: 'var(--on-primary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--caption-upper-size)', fontWeight: 'var(--caption-upper-weight)', letterSpacing: 'var(--caption-upper-tracking)', textTransform: 'uppercase' }
    : { background: 'var(--surface-card)', color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 'var(--caption-size)', fontWeight: 'var(--caption-weight)' };
  return (
    <span style={{ display: 'inline-block', borderRadius: 'var(--radius-pill)', padding: '4px 12px', lineHeight: 1.4, ...v, ...style }}>
      {children}
    </span>
  );
}
