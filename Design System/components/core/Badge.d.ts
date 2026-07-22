export interface BadgeProps {
  /** pill = neutral cream category tag (default); bronze = FOUNDATIONAL/ADVANCED/FEATURED highlight, uppercase tracked caption */
  variant?: 'pill' | 'bronze';
  children: React.ReactNode;
  style?: React.CSSProperties;
}
