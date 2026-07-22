import React from 'react';

export function PracticeTrackerCard({ drillName, date, progress, notes, style }) {
  return (
    <div style={{ background: 'var(--canvas)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-xl)', ...style }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-md-size)', fontWeight: 'var(--title-md-weight)', color: 'var(--ink)', marginBottom: 4 }}>{drillName}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--caption-size)', color: 'var(--muted)', marginBottom: 12 }}>{date}</div>
      <div style={{ height: 6, background: 'var(--hairline-soft)', borderRadius: 'var(--radius-pill)', marginBottom: 12, overflow: 'hidden' }}>
        <div style={{ width: `${progress}%`, height: '100%', background: 'var(--primary)' }} />
      </div>
      {notes && <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm-size)', color: 'var(--body)' }}>{notes}</div>}
    </div>
  );
}
