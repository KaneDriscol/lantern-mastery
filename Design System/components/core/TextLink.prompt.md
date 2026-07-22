Inline bronze text link, and a 36px circular icon button (carousel arrows, share, view-more).

```jsx
<TextLink href="/traditions">Read the source</TextLink>
<IconButtonCircular ariaLabel="Next" icon={<ChevronRight size={16} />} />
```

`TextLink` underlines only on hover/press (not by default). `IconButtonCircular` is 36×36 — slightly under WCAG 44 by design, visually centered.
