import React from 'react';

const base = {
  fontFamily: 'var(--font-sans)', fontSize: 'var(--button-size)', fontWeight: 'var(--button-weight)',
  lineHeight: 'var(--button-line)', height: 40, padding: '12px 20px', borderRadius: 'var(--radius-md)',
  border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  gap: 8, transition: 'background-color .15s ease',
};

const variants = {
  primary: { background: 'var(--primary)', color: 'var(--on-primary)' },
  secondary: { background: 'var(--canvas)', color: 'var(--ink)', border: '1px solid var(--hairline)' },
  'secondary-on-dark': { background: 'var(--surface-dark-elevated)', color: 'var(--on-dark)' },
};

const activeVariants = {
  primary: { background: 'var(--primary-active)' },
};

export function Button({ variant = 'primary', disabled = false, children, onClick, style }) {
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const a = active && activeVariants[variant] ? activeVariants[variant] : {};
  return (
    <button
      disabled={disabled}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onMouseLeave={() => setActive(false)}
      onClick={onClick}
      style={{ ...base, ...v, ...a, opacity: disabled ? 0.45 : 1, cursor: disabled ? 'not-allowed' : 'pointer', ...style }}
    >
      {children}
    </button>
  );
}
