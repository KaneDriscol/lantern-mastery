export interface CtaBandProps {
  /** bronze = 'Start Your Practice' pre-footer moment (default); dark = resource-page variant */
  variant?: 'bronze' | 'dark';
  title: string;
  subline: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
