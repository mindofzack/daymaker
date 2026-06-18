export interface ConditionBarProps {
  /** 0–100. Color auto-shifts Go/Caution/Avoid unless `tone` is set. */
  value: number;
  label?: React.ReactNode;
  showValue?: boolean;
  /** Force a color regardless of value. */
  tone?: 'go' | 'caution' | 'avoid' | 'info';
  height?: number;
  style?: React.CSSProperties;
}

/** Horizontal 0–100 gauge for condition score / model confidence. */
export function ConditionBar(props: ConditionBarProps): JSX.Element;
