import React from 'react';

export function FeatureCard({ icon, title, description, style }) {
  return (
    <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', ...style }}>
      {icon && <div style={{ marginBottom: 16, color: 'var(--primary)' }}>{icon}</div>}
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-md-size)', fontWeight: 'var(--title-md-weight)', color: 'var(--ink)', marginBottom: 8 }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-md-size)', lineHeight: 'var(--body-md-line)', color: 'var(--body)' }}>{description}</div>
    </div>
  );
}
