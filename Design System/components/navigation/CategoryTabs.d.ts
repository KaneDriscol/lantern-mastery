export interface CategoryTabsProps {
  tabs: string[];
  active: string;
  onChange?: (tab: string) => void;
}
