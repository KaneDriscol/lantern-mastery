import React from 'react';

export function ResourceConnectorTile({ icon, name, description, style }) {
  return (
    <div style={{ background: 'var(--canvas)', border: '1px solid var(--hairline)', borderRadius: 'var(--radius-lg)', padding: 20, ...style }}>
      {icon && <div style={{ marginBottom: 12, color: 'var(--primary)' }}>{icon}</div>}
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--title-sm-size)', fontWeight: 'var(--title-sm-weight)', color: 'var(--ink)', marginBottom: 4 }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm-size)', color: 'var(--body)' }}>{description}</div>
    </div>
  );
}
