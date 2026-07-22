export interface ButtonProps {
  /** Visual style. primary = bronze fill (default); secondary = cream w/ hairline border; secondary-on-dark = for use on dark surfaces */
  variant?: 'primary' | 'secondary' | 'secondary-on-dark';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
