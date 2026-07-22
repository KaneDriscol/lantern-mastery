import React from 'react';
import { TextLink } from '../core/TextLink.jsx';

export function ComparisonCard({ name, summary, style }) {
  return (
    <div style={{ background: 'var(--canvas)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', ...style }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-sm-size)', fontWeight: 'var(--title-sm-weight)', color: 'var(--ink)', marginBottom: 8 }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm-size)', color: 'var(--body)', marginBottom: 12 }}>{summary}</div>
      <TextLink href="#">View detailed guide</TextLink>
    </div>
  );
}
