function TechniquesScreen({ ds }) {
  const { CategoryTabs, Badge, ComparisonCard, TechniqueIllustrationCard, VirtueCard, TextInput, CtaBand, Button } = ds;
  const [tab, setTab] = React.useState('Longsword');
  return (
    <div style={{padding:'48px 32px 96px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24,flexWrap:'wrap',gap:16}}>
        <div>
          <h1 style={{fontFamily:'var(--font-serif-display)',fontSize:'var(--display-md-size)',letterSpacing:'var(--display-md-tracking)',color:'var(--ink)',marginBottom:8}}>Techniques &amp; Traditions</h1>
          <div style={{display:'flex',gap:8}}><Badge variant="bronze">Foundational</Badge><Badge variant="pill">27 techniques</Badge></div>
        </div>
        <TextInput placeholder="Search techniques…" style={{width:240}} />
      </div>

      <div style={{marginBottom:32}}>
        <CategoryTabs tabs={['All','Longsword','Rapier','Sabre','Dagger']} active={tab} onChange={setTab} />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginBottom:48}}>
        <ComparisonCard name="Longsword vs. Rapier" summary="Two-handed leverage versus single-hand tempo and reach." />
        <ComparisonCard name="Oberhau vs. Zwerchhau" summary="A descending cut compared to the horizontal cross-cut." />
        <ComparisonCard name="Italian vs. German guard" summary="Two schools' approach to measure and initiative." />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:24,marginBottom:48}}>
        <TechniqueIllustrationCard title="Zwerchhau sequence" steps={['Guard','Wind','Cut','Bind','Recover']} />
        <VirtueCard name="Courage" description="The willingness to close distance with intent, even against a longer weapon." />
      </div>

      <CtaBand variant="dark" title="Go deeper into the tradition" subline="Browse primary sources behind every technique in the library.">
        <Button variant="secondary-on-dark">Browse Resources</Button>
      </CtaBand>
    </div>
  );
}
window.TechniquesScreen = TechniquesScreen;
