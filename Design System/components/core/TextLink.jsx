import React from 'react';

export function TextLink({ href = '#', children, style }) {
  return (
    <a href={href} style={{ color: 'var(--primary)', fontFamily: 'var(--font-sans)', fontSize: 'var(--button-size)', fontWeight: 'var(--button-weight)', textDecoration: 'none', ...style }}
      onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
      onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
    >
      {children}
    </a>
  );
}

export function IconButtonCircular({ icon, onClick, ariaLabel, style }) {
  return (
    <button aria-label={ariaLabel} onClick={onClick} style={{
      width: 36, height: 36, borderRadius: 'var(--radius-full)', background: 'var(--canvas)',
      border: '1px solid var(--hairline)', color: 'var(--ink)', display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center', cursor: 'pointer', ...style,
    }}>
      {icon}
    </button>
  );
}
