export interface HeroBandProps {
  title: string;
  subhead: string;
  /** CTA buttons/links, rendered in a row */
  children: React.ReactNode;
  /** Content for the right-side illustration card (image, diagram placeholder, etc) */
  illustration?: React.ReactNode;
  /** true = dark charcoal illustration card instead of cream */
  dark?: boolean;
  style?: React.CSSProperties;
}
