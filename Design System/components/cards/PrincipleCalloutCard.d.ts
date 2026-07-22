export interface PrincipleCalloutCardProps {
  title: string;
  description: string;
  ctaLabel?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}
