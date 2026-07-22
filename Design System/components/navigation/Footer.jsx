import React from 'react';

const LanternMarkLight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--on-dark)" aria-hidden="true">
    <g transform="matrix(1.18519,0,0,1.18519,-2.22222,-1.59262)"><path d="M15.75,11L15.75,17C15.75,17.966 14.966,18.75 14,18.75L10,18.75C9.034,18.75 8.25,17.966 8.25,17L8.25,11C8.25,10.034 9.034,9.25 10,9.25L14,9.25C14.966,9.25 15.75,10.034 15.75,11ZM14.25,11C14.25,10.862 14.138,10.75 14,10.75L10,10.75C9.862,10.75 9.75,10.862 9.75,11L9.75,17C9.75,17.138 9.862,17.25 10,17.25L14,17.25C14.138,17.25 14.25,17.138 14.25,17L14.25,11Z" /></g>
    <g transform="matrix(0.888889,0,0,1.18519,1.33333,-1.59262)"><path d="M8,20.75C7.448,20.75 7,20.414 7,20C7,19.586 7.448,19.25 8,19.25L16,19.25C16.552,19.25 17,19.586 17,20C17,20.414 16.552,20.75 16,20.75L8,20.75Z" /></g>
    <g transform="matrix(0.592593,0,0,1.18519,4.88889,-15.8148)"><path d="M8,20.75C7.172,20.75 6.5,20.414 6.5,20C6.5,19.586 7.172,19.25 8,19.25L16,19.25C16.828,19.25 17.5,19.586 17.5,20C17.5,20.414 16.828,20.75 16,20.75L8,20.75Z" /></g>
    <g transform="matrix(1,0,0,1,0,2)"><path d="M12,1C13.481,1 14.7,2.219 14.7,3.7C14.7,5.181 13.481,6.4 12,6.4C10.519,6.4 9.3,5.181 9.3,3.7C9.3,2.219 10.519,1 12,1ZM12,2.778C11.494,2.778 11.078,3.194 11.078,3.7C11.078,4.206 11.494,4.622 12,4.622C12.506,4.622 12.922,4.206 12.922,3.7C12.922,3.194 12.506,2.778 12,2.778Z" /></g>
    <g transform="matrix(-0.012346,0,0,0.014815,15.0111,12.3926)"><path d="M166,121C166,211 256,226 256,301C256,331 226,376 181,376C136,376 106,331 136,256C91,286 76,316 76,346C76,421 151,496 256,496C361,496 436,451 436,361C436.67,227.875 282.6,183.404 241,121C211,76 226,46 256,16C196,31 166,73 166,121Z" /></g>
  </svg>
);

const columns = [
  { title: 'Traditions', links: ['Italian School', 'German School', 'Spanish School'] },
  { title: 'Resources', links: ['Manuscripts', 'Glossary', 'Reading List'] },
  { title: 'Community', links: ['Forums', 'Events', 'Instructors'] },
  { title: 'Legal', links: ['Privacy', 'Terms'] },
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--surface-dark)', color: 'var(--on-dark-soft)', padding: '64px 32px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40 }}>
        <LanternMarkLight />
        <span style={{ fontFamily: 'var(--font-serif-display)', fontSize: 20, color: 'var(--on-dark)' }}>Lantern</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
        {columns.map(c => (
          <div key={c.title}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--on-dark)', marginBottom: 12 }}>{c.title}</div>
            {c.links.map(l => (
              <div key={l} style={{ fontFamily: 'var(--font-sans)', fontSize: 14, padding: '6px 0' }}>{l}</div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}
