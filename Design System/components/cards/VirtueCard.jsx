import React from 'react';
import { TextLink } from '../core/TextLink.jsx';

export function VirtueCard({ name, description, style }) {
  return (
    <div style={{ background: 'var(--surface-dark)', color: 'var(--on-dark)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', ...style }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-sm-size)', fontWeight: 'var(--title-sm-weight)', marginBottom: 8 }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm-size)', color: 'var(--on-dark-soft)', marginBottom: 12 }}>{description}</div>
      <TextLink href="#" style={{ color: 'var(--accent-gold)' }}>Historical context</TextLink>
    </div>
  );
}
