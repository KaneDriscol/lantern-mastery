export interface PracticeTrackerCardProps {
  drillName: string;
  date: string;
  /** 0-100 */
  progress: number;
  notes?: string;
  style?: React.CSSProperties;
}
