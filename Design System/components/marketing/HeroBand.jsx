import React from 'react';

export function HeroBand({ title, subhead, children, illustration, dark = false, style }) {
  return (
    <div style={{ background: 'var(--canvas)', padding: 'var(--space-section) 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', ...style }}>
      <div>
        <h1 style={{ fontFamily: 'var(--font-serif-display)', fontSize: 'var(--display-xl-size)', lineHeight: 'var(--display-xl-line)', letterSpacing: 'var(--display-xl-tracking)', color: 'var(--ink)', marginBottom: 20 }}>{title}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-md-size)', lineHeight: 'var(--body-md-line)', color: 'var(--body)', marginBottom: 28 }}>{subhead}</p>
        <div style={{ display: 'flex', gap: 12 }}>{children}</div>
      </div>
      <div style={{ background: dark ? 'var(--surface-dark)' : 'var(--canvas)', border: dark ? 'none' : '1px solid var(--hairline)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-xl)', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {illustration}
      </div>
    </div>
  );
}
