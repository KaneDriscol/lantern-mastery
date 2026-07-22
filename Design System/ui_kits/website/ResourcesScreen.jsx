function ResourcesScreen({ ds }) {
  const { ResourceConnectorTile, SourceReferenceCard, CookieConsentCard } = ds;
  const [showCookie, setShowCookie] = React.useState(true);
  return (
    <div style={{padding:'48px 32px 96px',position:'relative'}}>
      <h1 style={{fontFamily:'var(--font-serif-display)',fontSize:'var(--display-md-size)',letterSpacing:'var(--display-md-tracking)',color:'var(--ink)',marginBottom:32}}>Resources</h1>

      <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20,marginBottom:48}}>
        <ResourceConnectorTile name="HEMA Alliance" description="Community tournament index and event calendar." />
        <ResourceConnectorTile name="Wiktenauer" description="Digitized historical fencing manuscript archive." />
        <ResourceConnectorTile name="Glossary" description="Terminology across schools and traditions." />
        <ResourceConnectorTile name="Reading List" description="Curated primary and secondary sources." />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:24}}>
        <SourceReferenceCard sourceName="Fechtbuch" author="Joachim Meyer" date="1570" excerpt="Practice this cut until it is second nature." />
        <SourceReferenceCard sourceName="Flos Duellatorum" author="Fiore dei Liberi" date="1409" excerpt="Play is the foundation upon which all art is built." />
      </div>

      {showCookie && (
        <div style={{position:'fixed',bottom:24,right:24}}>
          <CookieConsentCard onAccept={() => setShowCookie(false)} onDismiss={() => setShowCookie(false)} />
        </div>
      )}
    </div>
  );
}
window.ResourcesScreen = ResourcesScreen;
