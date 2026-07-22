/* @ds-bundle: {"format":4,"namespace":"LanternDesignSystem_b388cd","components":[{"name":"ComparisonCard","sourcePath":"components/cards/ComparisonCard.jsx"},{"name":"CookieConsentCard","sourcePath":"components/cards/CookieConsentCard.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"PracticeTrackerCard","sourcePath":"components/cards/PracticeTrackerCard.jsx"},{"name":"PrincipleCalloutCard","sourcePath":"components/cards/PrincipleCalloutCard.jsx"},{"name":"ResourceConnectorTile","sourcePath":"components/cards/ResourceConnectorTile.jsx"},{"name":"SourceReferenceCard","sourcePath":"components/cards/SourceReferenceCard.jsx"},{"name":"TechniqueIllustrationCard","sourcePath":"components/cards/TechniqueIllustrationCard.jsx"},{"name":"VirtueCard","sourcePath":"components/cards/VirtueCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"TextInput","sourcePath":"components/core/TextInput.jsx"},{"name":"TextLink","sourcePath":"components/core/TextLink.jsx"},{"name":"IconButtonCircular","sourcePath":"components/core/TextLink.jsx"},{"name":"CtaBand","sourcePath":"components/marketing/CtaBand.jsx"},{"name":"HeroBand","sourcePath":"components/marketing/HeroBand.jsx"},{"name":"CategoryTabs","sourcePath":"components/navigation/CategoryTabs.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/cards/ComparisonCard.jsx":"3d4636280e53","components/cards/CookieConsentCard.jsx":"1146beabdf18","components/cards/FeatureCard.jsx":"783b9b276905","components/cards/PracticeTrackerCard.jsx":"b71032999d60","components/cards/PrincipleCalloutCard.jsx":"98efc2808818","components/cards/ResourceConnectorTile.jsx":"1e8808c40245","components/cards/SourceReferenceCard.jsx":"f8110aaac0ca","components/cards/TechniqueIllustrationCard.jsx":"7e1d831d80d0","components/cards/VirtueCard.jsx":"7108f137bceb","components/core/Badge.jsx":"d6494cbc04a9","components/core/Button.jsx":"1a42158628ed","components/core/TextInput.jsx":"8ec738b838cc","components/core/TextLink.jsx":"6c2a60d65062","components/marketing/CtaBand.jsx":"57c434df9946","components/marketing/HeroBand.jsx":"a2ada0003cee","components/navigation/CategoryTabs.jsx":"110eb29dc7c6","components/navigation/Footer.jsx":"391841336608","components/navigation/TopNav.jsx":"ed2812d6a42b","ui_kits/website/HomeScreen.jsx":"21206d0c1f73","ui_kits/website/PracticeScreen.jsx":"0e8573041d97","ui_kits/website/ResourcesScreen.jsx":"d9abfcdc770f","ui_kits/website/TechniquesScreen.jsx":"084965408cf3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LanternDesignSystem_b388cd = window.LanternDesignSystem_b388cd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/CookieConsentCard.jsx
try { (() => {
function CookieConsentCard({
  onAccept,
  onDismiss,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--on-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      maxWidth: 340,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      marginBottom: 16
    }
  }, "We use cookies to keep your practice log and preferences. See our privacy policy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onAccept,
    style: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '8px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, "Accept"), /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      background: 'transparent',
      color: 'var(--on-dark-soft)',
      border: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, "Dismiss")));
}
Object.assign(__ds_scope, { CookieConsentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CookieConsentCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon,
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16,
      color: 'var(--primary)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-md-size)',
      fontWeight: 'var(--title-md-weight)',
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      color: 'var(--body)'
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PracticeTrackerCard.jsx
try { (() => {
function PracticeTrackerCard({
  drillName,
  date,
  progress,
  notes,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-md-size)',
      fontWeight: 'var(--title-md-weight)',
      color: 'var(--ink)',
      marginBottom: 4
    }
  }, drillName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--caption-size)',
      color: 'var(--muted)',
      marginBottom: 12
    }
  }, date), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--hairline-soft)',
      borderRadius: 'var(--radius-pill)',
      marginBottom: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${progress}%`,
      height: '100%',
      background: 'var(--primary)'
    }
  })), notes && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--body)'
    }
  }, notes));
}
Object.assign(__ds_scope, { PracticeTrackerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PracticeTrackerCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ResourceConnectorTile.jsx
try { (() => {
function ResourceConnectorTile({
  icon,
  name,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      color: 'var(--primary)'
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-sm-size)',
      fontWeight: 'var(--title-sm-weight)',
      color: 'var(--ink)',
      marginBottom: 4
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--body)'
    }
  }, description));
}
Object.assign(__ds_scope, { ResourceConnectorTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ResourceConnectorTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/SourceReferenceCard.jsx
try { (() => {
function SourceReferenceCard({
  sourceName,
  author,
  date,
  excerpt,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-sm-size)',
      fontWeight: 'var(--title-sm-weight)',
      color: 'var(--ink)',
      marginBottom: 4
    }
  }, sourceName), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--caption-size)',
      color: 'var(--muted)',
      marginBottom: 12
    }
  }, author, " \xB7 ", date), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      color: 'var(--body)',
      fontStyle: 'italic'
    }
  }, "\u201C", excerpt, "\u201D"));
}
Object.assign(__ds_scope, { SourceReferenceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SourceReferenceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TechniqueIllustrationCard.jsx
try { (() => {
function TechniqueIllustrationCard({
  title,
  steps = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--on-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-md-size)',
      fontWeight: 'var(--title-md-weight)',
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '0 0 auto',
      width: 120,
      height: 120,
      background: 'var(--surface-dark-elevated)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--on-dark-soft)',
      fontSize: 13
    }
  }, s))));
}
Object.assign(__ds_scope, { TechniqueIllustrationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TechniqueIllustrationCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function Badge({
  variant = 'pill',
  children,
  style
}) {
  const v = variant === 'bronze' ? {
    background: 'var(--primary)',
    color: 'var(--on-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--caption-upper-size)',
    fontWeight: 'var(--caption-upper-weight)',
    letterSpacing: 'var(--caption-upper-tracking)',
    textTransform: 'uppercase'
  } : {
    background: 'var(--surface-card)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--caption-size)',
    fontWeight: 'var(--caption-weight)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px',
      lineHeight: 1.4,
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--button-size)',
  fontWeight: 'var(--button-weight)',
  lineHeight: 'var(--button-line)',
  height: 40,
  padding: '12px 20px',
  borderRadius: 'var(--radius-md)',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  transition: 'background-color .15s ease'
};
const variants = {
  primary: {
    background: 'var(--primary)',
    color: 'var(--on-primary)'
  },
  secondary: {
    background: 'var(--canvas)',
    color: 'var(--ink)',
    border: '1px solid var(--hairline)'
  },
  'secondary-on-dark': {
    background: 'var(--surface-dark-elevated)',
    color: 'var(--on-dark)'
  }
};
const activeVariants = {
  primary: {
    background: 'var(--primary-active)'
  }
};
function Button({
  variant = 'primary',
  disabled = false,
  children,
  onClick,
  style
}) {
  const [active, setActive] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const a = active && activeVariants[variant] ? activeVariants[variant] : {};
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onMouseLeave: () => setActive(false),
    onClick: onClick,
    style: {
      ...base,
      ...v,
      ...a,
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/PrincipleCalloutCard.jsx
try { (() => {
function PrincipleCalloutCard({
  title,
  description,
  ctaLabel,
  onCta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--primary)',
      color: 'var(--on-primary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-md-size)',
      fontWeight: 'var(--title-md-weight)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      marginBottom: ctaLabel ? 20 : 0
    }
  }, description), ctaLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary-on-dark",
    onClick: onCta
  }, ctaLabel));
}
Object.assign(__ds_scope, { PrincipleCalloutCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PrincipleCalloutCard.jsx", error: String((e && e.message) || e) }); }

// components/core/TextInput.jsx
try { (() => {
function TextInput({
  placeholder,
  value,
  onChange,
  style
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", {
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      background: 'var(--canvas)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)',
      height: 40,
      padding: '10px 14px',
      borderRadius: 'var(--radius-md)',
      border: focused ? '1px solid var(--primary)' : '1px solid var(--hairline)',
      boxShadow: focused ? '0 0 0 3px var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'border-color .15s ease, box-shadow .15s ease',
      ...style
    }
  });
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/core/TextLink.jsx
try { (() => {
function TextLink({
  href = '#',
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--primary)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--button-size)',
      fontWeight: 'var(--button-weight)',
      textDecoration: 'none',
      ...style
    },
    onMouseEnter: e => e.currentTarget.style.textDecoration = 'underline',
    onMouseLeave: e => e.currentTarget.style.textDecoration = 'none'
  }, children);
}
function IconButtonCircular({
  icon,
  onClick,
  ariaLabel,
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": ariaLabel,
    onClick: onClick,
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-full)',
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      color: 'var(--ink)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      ...style
    }
  }, icon);
}
Object.assign(__ds_scope, { TextLink, IconButtonCircular });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/cards/ComparisonCard.jsx
try { (() => {
function ComparisonCard({
  name,
  summary,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-sm-size)',
      fontWeight: 'var(--title-sm-weight)',
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--body)',
      marginBottom: 12
    }
  }, summary), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: "#"
  }, "View detailed guide"));
}
Object.assign(__ds_scope, { ComparisonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ComparisonCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/VirtueCard.jsx
try { (() => {
function VirtueCard({
  name,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--on-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--title-sm-size)',
      fontWeight: 'var(--title-sm-weight)',
      marginBottom: 8
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-sm-size)',
      color: 'var(--on-dark-soft)',
      marginBottom: 12
    }
  }, description), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: "#",
    style: {
      color: 'var(--accent-gold)'
    }
  }, "Historical context"));
}
Object.assign(__ds_scope, { VirtueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/VirtueCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CtaBand.jsx
try { (() => {
function CtaBand({
  variant = 'bronze',
  title,
  subline,
  children,
  style
}) {
  const bg = variant === 'bronze' ? 'var(--primary)' : 'var(--surface-dark)';
  const color = variant === 'bronze' ? 'var(--on-primary)' : 'var(--on-dark)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      borderRadius: 'var(--radius-lg)',
      padding: 64,
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--display-sm-size)',
      lineHeight: 'var(--display-sm-line)',
      letterSpacing: 'var(--display-sm-tracking)',
      marginBottom: 12
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)',
      marginBottom: 28,
      opacity: 0.9
    }
  }, subline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 12
    }
  }, children));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HeroBand.jsx
try { (() => {
function HeroBand({
  title,
  subhead,
  children,
  illustration,
  dark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--canvas)',
      padding: 'var(--space-section) 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-line)',
      letterSpacing: 'var(--display-xl-tracking)',
      color: 'var(--ink)',
      marginBottom: 20
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      color: 'var(--body)',
      marginBottom: 28
    }
  }, subhead), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--surface-dark)' : 'var(--canvas)',
      border: dark ? 'none' : '1px solid var(--hairline)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-xl)',
      minHeight: 320,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, illustration));
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTabs.jsx
try { (() => {
function CategoryTabs({
  tabs,
  active,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => onChange && onChange(t),
    style: {
      background: t === active ? 'var(--surface-card)' : 'transparent',
      color: t === active ? 'var(--ink)' : 'var(--muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--nav-link-size)',
      fontWeight: 'var(--nav-link-weight)',
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      cursor: 'pointer'
    }
  }, t)));
}
Object.assign(__ds_scope, { CategoryTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const LanternMarkLight = () => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "var(--on-dark)",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("g", {
  transform: "matrix(1.18519,0,0,1.18519,-2.22222,-1.59262)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M15.75,11L15.75,17C15.75,17.966 14.966,18.75 14,18.75L10,18.75C9.034,18.75 8.25,17.966 8.25,17L8.25,11C8.25,10.034 9.034,9.25 10,9.25L14,9.25C14.966,9.25 15.75,10.034 15.75,11ZM14.25,11C14.25,10.862 14.138,10.75 14,10.75L10,10.75C9.862,10.75 9.75,10.862 9.75,11L9.75,17C9.75,17.138 9.862,17.25 10,17.25L14,17.25C14.138,17.25 14.25,17.138 14.25,17L14.25,11Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(0.888889,0,0,1.18519,1.33333,-1.59262)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8,20.75C7.448,20.75 7,20.414 7,20C7,19.586 7.448,19.25 8,19.25L16,19.25C16.552,19.25 17,19.586 17,20C17,20.414 16.552,20.75 16,20.75L8,20.75Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(0.592593,0,0,1.18519,4.88889,-15.8148)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8,20.75C7.172,20.75 6.5,20.414 6.5,20C6.5,19.586 7.172,19.25 8,19.25L16,19.25C16.828,19.25 17.5,19.586 17.5,20C17.5,20.414 16.828,20.75 16,20.75L8,20.75Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(1,0,0,1,0,2)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12,1C13.481,1 14.7,2.219 14.7,3.7C14.7,5.181 13.481,6.4 12,6.4C10.519,6.4 9.3,5.181 9.3,3.7C9.3,2.219 10.519,1 12,1ZM12,2.778C11.494,2.778 11.078,3.194 11.078,3.7C11.078,4.206 11.494,4.622 12,4.622C12.506,4.622 12.922,4.206 12.922,3.7C12.922,3.194 12.506,2.778 12,2.778Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(-0.012346,0,0,0.014815,15.0111,12.3926)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M166,121C166,211 256,226 256,301C256,331 226,376 181,376C136,376 106,331 136,256C91,286 76,316 76,346C76,421 151,496 256,496C361,496 436,451 436,361C436.67,227.875 282.6,183.404 241,121C211,76 226,46 256,16C196,31 166,73 166,121Z"
})));
const columns = [{
  title: 'Traditions',
  links: ['Italian School', 'German School', 'Spanish School']
}, {
  title: 'Resources',
  links: ['Manuscripts', 'Glossary', 'Reading List']
}, {
  title: 'Community',
  links: ['Forums', 'Events', 'Instructors']
}, {
  title: 'Legal',
  links: ['Privacy', 'Terms']
}];
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--on-dark-soft)',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(LanternMarkLight, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 20,
      color: 'var(--on-dark)'
    }
  }, "Lantern")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--on-dark)',
      marginBottom: 12
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      padding: '6px 0'
    }
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
const LanternMark = ({
  color = 'var(--primary)'
}) => /*#__PURE__*/React.createElement("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: color,
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("g", {
  transform: "matrix(1.18519,0,0,1.18519,-2.22222,-1.59262)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M15.75,11L15.75,17C15.75,17.966 14.966,18.75 14,18.75L10,18.75C9.034,18.75 8.25,17.966 8.25,17L8.25,11C8.25,10.034 9.034,9.25 10,9.25L14,9.25C14.966,9.25 15.75,10.034 15.75,11ZM14.25,11C14.25,10.862 14.138,10.75 14,10.75L10,10.75C9.862,10.75 9.75,10.862 9.75,11L9.75,17C9.75,17.138 9.862,17.25 10,17.25L14,17.25C14.138,17.25 14.25,17.138 14.25,17L14.25,11Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(0.888889,0,0,1.18519,1.33333,-1.59262)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8,20.75C7.448,20.75 7,20.414 7,20C7,19.586 7.448,19.25 8,19.25L16,19.25C16.552,19.25 17,19.586 17,20C17,20.414 16.552,20.75 16,20.75L8,20.75Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(0.592593,0,0,1.18519,4.88889,-15.8148)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M8,20.75C7.172,20.75 6.5,20.414 6.5,20C6.5,19.586 7.172,19.25 8,19.25L16,19.25C16.828,19.25 17.5,19.586 17.5,20C17.5,20.414 16.828,20.75 16,20.75L8,20.75Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(1,0,0,1,0,2)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12,1C13.481,1 14.7,2.219 14.7,3.7C14.7,5.181 13.481,6.4 12,6.4C10.519,6.4 9.3,5.181 9.3,3.7C9.3,2.219 10.519,1 12,1ZM12,2.778C11.494,2.778 11.078,3.194 11.078,3.7C11.078,4.206 11.494,4.622 12,4.622C12.506,4.622 12.922,4.206 12.922,3.7C12.922,3.194 12.506,2.778 12,2.778Z"
})), /*#__PURE__*/React.createElement("g", {
  transform: "matrix(-0.012346,0,0,0.014815,15.0111,12.3926)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M166,121C166,211 256,226 256,301C256,331 226,376 181,376C136,376 106,331 136,256C91,286 76,316 76,346C76,421 151,496 256,496C361,496 436,451 436,361C436.67,227.875 282.6,183.404 241,121C211,76 226,46 256,16C196,31 166,73 166,121Z"
})));
const links = ['Traditions', 'Techniques', 'Practice', 'Resources', 'Community', 'About'];
function TopNav({
  activeLink,
  onNavigate,
  onSignIn,
  onLearnNow
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 64,
      background: 'var(--canvas)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(LanternMark, null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 20,
      color: 'var(--ink)'
    }
  }, "Lantern")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNavigate && onNavigate(l),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--nav-link-size)',
      fontWeight: 'var(--nav-link-weight)',
      color: l === activeLink ? 'var(--ink)' : 'var(--muted)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: "#",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onLearnNow
  }, "Learn Now")));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function HomeScreen({
  ds,
  go
}) {
  const {
    HeroBand,
    Button,
    FeatureCard,
    TechniqueIllustrationCard,
    PrincipleCalloutCard,
    SourceReferenceCard,
    CtaBand
  } = ds;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HeroBand, {
    title: "Learn the sword, honestly.",
    subhead: "Lantern traces every technique back to a primary source: historical fencing manuals, not modern reinvention. Practice with the confidence of tradition behind you.",
    illustration: /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif-display)',
        fontSize: 20,
        color: 'var(--muted)',
        textAlign: 'center'
      }
    }, "Technique diagram", /*#__PURE__*/React.createElement("br", null), "placeholder")
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go('techniques')
  }, "Learn Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('techniques')
  }, "Explore Traditions")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 96px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    title: "Historical Grounding",
    description: "Every technique traces to a primary source manuscript, not a modern reinvention."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "Structured Practice",
    description: "Log drills, track progress, and build toward mastery one session at a time."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    title: "Living Tradition",
    description: "Study the Italian, German, and Spanish schools side by side."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 96px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(TechniqueIllustrationCard, {
    title: "Zwerchhau: the horizontal cut",
    steps: ['Guard', 'Wind', 'Cut', 'Recover']
  }), /*#__PURE__*/React.createElement(SourceReferenceCard, {
    sourceName: "Fechtbuch",
    author: "Joachim Meyer",
    date: "1570",
    excerpt: "Practice this cut until it is second nature, for speed without control is merely haste."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(PrincipleCalloutCard, {
    title: "Prudence over speed",
    description: "Control precedes tempo. Lantern teaches you to read the bind before you commit to the strike.",
    ctaLabel: "View drill"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 32px 96px'
    }
  }, /*#__PURE__*/React.createElement(CtaBand, {
    variant: "bronze",
    title: "Start Your Practice",
    subline: "Join a tradition that goes back centuries, and begin your first drill today."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-on-dark",
    onClick: () => go('practice')
  }, "Start the drill"))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PracticeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PracticeScreen({
  ds
}) {
  const {
    PracticeTrackerCard,
    Button,
    Badge
  } = ds;
  const [logs, setLogs] = React.useState([{
    drillName: 'Oberhau drill',
    date: 'Jul 14, 2026',
    progress: 70,
    notes: 'Felt cleaner today.'
  }, {
    drillName: 'Zwerchhau: bind recovery',
    date: 'Jul 11, 2026',
    progress: 45,
    notes: 'Still rushing the recovery step.'
  }, {
    drillName: 'Footwork: passing step',
    date: 'Jul 8, 2026',
    progress: 90,
    notes: ''
  }]);
  const addLog = () => setLogs([{
    drillName: 'New drill',
    date: 'Today',
    progress: 10,
    notes: ''
  }, ...logs]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--display-md-size)',
      letterSpacing: 'var(--display-md-tracking)',
      color: 'var(--ink)'
    }
  }, "Practice Log"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: addLog
  }, "Log a drill")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "pill"
  }, logs.length, " entries this month")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, logs.map((l, i) => /*#__PURE__*/React.createElement(PracticeTrackerCard, _extends({
    key: i
  }, l)))));
}
window.PracticeScreen = PracticeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PracticeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResourcesScreen.jsx
try { (() => {
function ResourcesScreen({
  ds
}) {
  const {
    ResourceConnectorTile,
    SourceReferenceCard,
    CookieConsentCard
  } = ds;
  const [showCookie, setShowCookie] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 32px 96px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--display-md-size)',
      letterSpacing: 'var(--display-md-tracking)',
      color: 'var(--ink)',
      marginBottom: 32
    }
  }, "Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(ResourceConnectorTile, {
    name: "HEMA Alliance",
    description: "Community tournament index and event calendar."
  }), /*#__PURE__*/React.createElement(ResourceConnectorTile, {
    name: "Wiktenauer",
    description: "Digitized historical fencing manuscript archive."
  }), /*#__PURE__*/React.createElement(ResourceConnectorTile, {
    name: "Glossary",
    description: "Terminology across schools and traditions."
  }), /*#__PURE__*/React.createElement(ResourceConnectorTile, {
    name: "Reading List",
    description: "Curated primary and secondary sources."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(SourceReferenceCard, {
    sourceName: "Fechtbuch",
    author: "Joachim Meyer",
    date: "1570",
    excerpt: "Practice this cut until it is second nature."
  }), /*#__PURE__*/React.createElement(SourceReferenceCard, {
    sourceName: "Flos Duellatorum",
    author: "Fiore dei Liberi",
    date: "1409",
    excerpt: "Play is the foundation upon which all art is built."
  })), showCookie && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      right: 24
    }
  }, /*#__PURE__*/React.createElement(CookieConsentCard, {
    onAccept: () => setShowCookie(false),
    onDismiss: () => setShowCookie(false)
  })));
}
window.ResourcesScreen = ResourcesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResourcesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TechniquesScreen.jsx
try { (() => {
function TechniquesScreen({
  ds
}) {
  const {
    CategoryTabs,
    Badge,
    ComparisonCard,
    TechniqueIllustrationCard,
    VirtueCard,
    TextInput,
    CtaBand,
    Button
  } = ds;
  const [tab, setTab] = React.useState('Longsword');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--display-md-size)',
      letterSpacing: 'var(--display-md-tracking)',
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, "Techniques & Traditions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "bronze"
  }, "Foundational"), /*#__PURE__*/React.createElement(Badge, {
    variant: "pill"
  }, "27 techniques"))), /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "Search techniques\u2026",
    style: {
      width: 240
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(CategoryTabs, {
    tabs: ['All', 'Longsword', 'Rapier', 'Sabre', 'Dagger'],
    active: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(ComparisonCard, {
    name: "Longsword vs. Rapier",
    summary: "Two-handed leverage versus single-hand tempo and reach."
  }), /*#__PURE__*/React.createElement(ComparisonCard, {
    name: "Oberhau vs. Zwerchhau",
    summary: "A descending cut compared to the horizontal cross-cut."
  }), /*#__PURE__*/React.createElement(ComparisonCard, {
    name: "Italian vs. German guard",
    summary: "Two schools' approach to measure and initiative."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 24,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(TechniqueIllustrationCard, {
    title: "Zwerchhau sequence",
    steps: ['Guard', 'Wind', 'Cut', 'Bind', 'Recover']
  }), /*#__PURE__*/React.createElement(VirtueCard, {
    name: "Courage",
    description: "The willingness to close distance with intent, even against a longer weapon."
  })), /*#__PURE__*/React.createElement(CtaBand, {
    variant: "dark",
    title: "Go deeper into the tradition",
    subline: "Browse primary sources behind every technique in the library."
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-on-dark"
  }, "Browse Resources")));
}
window.TechniquesScreen = TechniquesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TechniquesScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ComparisonCard = __ds_scope.ComparisonCard;

__ds_ns.CookieConsentCard = __ds_scope.CookieConsentCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PracticeTrackerCard = __ds_scope.PracticeTrackerCard;

__ds_ns.PrincipleCalloutCard = __ds_scope.PrincipleCalloutCard;

__ds_ns.ResourceConnectorTile = __ds_scope.ResourceConnectorTile;

__ds_ns.SourceReferenceCard = __ds_scope.SourceReferenceCard;

__ds_ns.TechniqueIllustrationCard = __ds_scope.TechniqueIllustrationCard;

__ds_ns.VirtueCard = __ds_scope.VirtueCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.IconButtonCircular = __ds_scope.IconButtonCircular;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.CategoryTabs = __ds_scope.CategoryTabs;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
