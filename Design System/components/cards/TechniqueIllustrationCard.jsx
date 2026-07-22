import React from 'react';

export function TechniqueIllustrationCard({ title, steps = [], style }) {
  return (
    <div style={{ background: 'var(--surface-dark)', color: 'var(--on-dark)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', ...style }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-md-size)', fontWeight: 'var(--title-md-weight)', marginBottom: 16 }}>{title}</div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: 120, height: 120, background: 'var(--surface-dark-elevated)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--on-dark-soft)', fontSize: 13 }}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}
