import React from 'react';

export function CookieConsentCard({ onAccept, onDismiss, style }) {
  return (
    <div style={{ background: 'var(--surface-dark)', color: 'var(--on-dark)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-lg)', maxWidth: 340, ...style }}>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--body-sm-size)', marginBottom: 16 }}>
        We use cookies to keep your practice log and preferences. See our privacy policy.
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={onAccept} style={{ background: 'var(--primary)', color: 'var(--on-primary)', border: 'none', borderRadius: 'var(--radius-md)', padding: '8px 16px', fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>Accept</button>
        <button onClick={onDismiss} style={{ background: 'transparent', color: 'var(--on-dark-soft)', border: 'none', fontFamily: 'var(--font-sans)', fontSize: 13, cursor: 'pointer' }}>Dismiss</button>
      </div>
    </div>
  );
}
