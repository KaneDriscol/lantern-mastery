export interface TextLinkProps {
  href?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export interface IconButtonCircularProps {
  /** Icon element (e.g. an <i data-lucide="..."> or inline svg from assets/icons) */
  icon: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
  style?: React.CSSProperties;
}
