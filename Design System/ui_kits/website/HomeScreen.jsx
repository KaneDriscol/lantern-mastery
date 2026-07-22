function HomeScreen({ ds, go }) {
  const { HeroBand, Button, FeatureCard, TechniqueIllustrationCard, PrincipleCalloutCard, SourceReferenceCard, CtaBand } = ds;
  return (
    <div>
      <HeroBand
        title="Learn the sword, honestly."
        subhead="Lantern traces every technique back to a primary source: historical fencing manuals, not modern reinvention. Practice with the confidence of tradition behind you."
        illustration={<div style={{fontFamily:'var(--font-serif-display)',fontSize:20,color:'var(--muted)',textAlign:'center'}}>Technique diagram<br/>placeholder</div>}
      >
        <Button variant="primary" onClick={() => go('techniques')}>Learn Now</Button>
        <Button variant="secondary" onClick={() => go('techniques')}>Explore Traditions</Button>
      </HeroBand>

      <div style={{padding:'0 32px 96px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
        <FeatureCard title="Historical Grounding" description="Every technique traces to a primary source manuscript, not a modern reinvention." />
        <FeatureCard title="Structured Practice" description="Log drills, track progress, and build toward mastery one session at a time." />
        <FeatureCard title="Living Tradition" description="Study the Italian, German, and Spanish schools side by side." />
      </div>

      <div style={{padding:'0 32px 96px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
        <TechniqueIllustrationCard title="Zwerchhau: the horizontal cut" steps={['Guard','Wind','Cut','Recover']} />
        <SourceReferenceCard sourceName="Fechtbuch" author="Joachim Meyer" date="1570" excerpt="Practice this cut until it is second nature, for speed without control is merely haste." />
      </div>

      <div style={{padding:'0 32px 96px'}}>
        <PrincipleCalloutCard
          title="Prudence over speed"
          description="Control precedes tempo. Lantern teaches you to read the bind before you commit to the strike."
          ctaLabel="View drill"
        />
      </div>

      <div style={{padding:'0 32px 96px'}}>
        <CtaBand variant="bronze" title="Start Your Practice" subline="Join a tradition that goes back centuries, and begin your first drill today.">
          <Button variant="secondary-on-dark" onClick={() => go('practice')}>Start the drill</Button>
        </CtaBand>
      </div>
    </div>
  );
}
window.HomeScreen = HomeScreen;
