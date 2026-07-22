Feature/reference/tracker cards used across the Lantern surfaces. Cream-to-dark alternation is the deck's pacing mechanism — see readme "Visual Foundations".

```jsx
<FeatureCard icon={<Icon/>} title="Historical Grounding" description="Every technique traces to a primary source." />
<TechniqueIllustrationCard title="Zwerchhau" steps={['1','2','3']} />
<SourceReferenceCard sourceName="Meyer's Fechtbuch" author="Joachim Meyer" date="1570" excerpt="..." />
<PrincipleCalloutCard title="Prudence over speed" description="..." ctaLabel="View drill" />
<VirtueCard name="Courage" description="..." />
<ComparisonCard name="Longsword vs. Rapier" summary="..." />
<PracticeTrackerCard drillName="Oberhau drill" date="Jul 14" progress={70} notes="Felt cleaner today" />
<ResourceConnectorTile icon={<Icon/>} name="HEMA Alliance" description="Community tournament index" />
<CookieConsentCard onAccept={...} onDismiss={...} />
```

Notes: `VirtueCard` and `TechniqueIllustrationCard` are the system's dark-surface cards — the dark background itself is the "featured" signal. `PrincipleCalloutCard` is the bronze-fill equivalent. All others sit on cream with a hairline border.
