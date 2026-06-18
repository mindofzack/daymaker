export interface BadgeProps {
  /** Tone — semantic tones echo the Go/Caution/Avoid system. */
  tone?: 'neutral' | 'accent' | 'go' | 'caution' | 'avoid' | 'info';
  /** Filled vs soft-tint. */
  solid?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Tiny uppercase status pill. */
export function Badge(props: BadgeProps): JSX.Element;
