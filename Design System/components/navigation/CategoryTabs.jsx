import React from 'react';

export function CategoryTabs({ tabs, active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {tabs.map(t => (
        <button key={t} onClick={() => onChange && onChange(t)} style={{
          background: t === active ? 'var(--surface-card)' : 'transparent',
          color: t === active ? 'var(--ink)' : 'var(--muted)',
          fontFamily: 'var(--font-sans)', fontSize: 'var(--nav-link-size)', fontWeight: 'var(--nav-link-weight)',
          padding: '8px 14px', borderRadius: 'var(--radius-md)', border: 'none', cursor: 'pointer',
        }}>{t}</button>
      ))}
    </div>
  );
}
