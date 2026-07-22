import React from 'react';
import { Button } from '../core/Button.jsx';

export function PrincipleCalloutCard({ title, description, ctaLabel, onCta, style }) {
  return (
    <div style={{ background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', ...style }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-md-size)', fontWeight: 'var(--title-md-weight)', marginBottom: 8 }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-md-size)', lineHeight: 'var(--body-md-line)', marginBottom: ctaLabel ? 20 : 0 }}>{description}</div>
      {ctaLabel && <Button variant="secondary-on-dark" onClick={onCta}>{ctaLabel}</Button>}
    </div>
  );
}
