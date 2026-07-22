import React from 'react';

export function SourceReferenceCard({ sourceName, author, date, excerpt, style }) {
  return (
    <div style={{ background: 'var(--canvas)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', ...style }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-sm-size)', fontWeight: 'var(--title-sm-weight)', color: 'var(--ink)', marginBottom: 4 }}>{sourceName}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--caption-size)', color: 'var(--muted)', marginBottom: 12 }}>{author} · {date}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-md-size)', lineHeight: 'var(--body-md-line)', color: 'var(--body)', fontStyle: 'italic' }}>&ldquo;{excerpt}&rdquo;</div>
    </div>
  );
}
