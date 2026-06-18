export interface SegmentOption {
  value: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
}
export interface SegmentedControlProps {
  options: (string | SegmentOption)[];
  value?: string;
  onChange?: (value: string) => void;
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/** Pill segmented control — view switchers (Weather / Fishing / Map). */
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
