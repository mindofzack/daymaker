export interface ButtonProps {
  /** Visual style. Primary = aqua fill (the singular accent). */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  /** Uppercase label with wide tracking — the systematic "label voice". */
  uppercase?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Pill-shaped button. Aqua primary for the one true CTA per view.
 * @startingPoint section="Controls" subtitle="Pill buttons — primary, secondary, outline, ghost" viewport="700x200"
 */
export function Button(props: ButtonProps): JSX.Element;
