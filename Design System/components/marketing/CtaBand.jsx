import React from 'react';

export function CtaBand({ variant = 'bronze', title, subline, children, style }) {
  const bg = variant === 'bronze' ? 'var(--primary)' : 'var(--surface-dark)';
  const color = variant === 'bronze' ? 'var(--on-primary)' : 'var(--on-dark)';
  return (
    <div style={{ background: bg, color, borderRadius: 'var(--radius-lg)', padding: 64, textAlign: 'center', ...style }}>
      <h2 style={{ fontFamily: 'var(--font-serif-display)', fontSize: 'var(--display-sm-size)', lineHeight: 'var(--display-sm-line)', letterSpacing: 'var(--display-sm-tracking)', marginBottom: 12 }}>{title}</h2>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-md-size)', marginBottom: 28, opacity: 0.9 }}>{subline}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>{children}</div>
    </div>
  );
}
