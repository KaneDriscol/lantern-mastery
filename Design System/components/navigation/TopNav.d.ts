export interface TopNavProps {
  activeLink?: string;
  onNavigate?: (link: string) => void;
  onSignIn?: () => void;
  onLearnNow?: () => void;
}
