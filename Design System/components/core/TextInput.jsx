import React from 'react';

export function TextInput({ placeholder, value, onChange, style }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        background: 'var(--canvas)', color: 'var(--ink)', fontFamily: 'var(--font-sans)', fontSize: 'var(--body-md-size)',
        height: 40, padding: '10px 14px', borderRadius: 'var(--radius-md)',
        border: focused ? '1px solid var(--primary)' : '1px solid var(--hairline)',
        boxShadow: focused ? '0 0 0 3px var(--focus-ring)' : 'none',
        outline: 'none', transition: 'border-color .15s ease, box-shadow .15s ease', ...style,
      }}
    />
  );
}
