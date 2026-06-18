export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** pill = search-style; box = subtle 4px radius. */
  shape?: 'pill' | 'box';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  invalid?: boolean;
  containerStyle?: React.CSSProperties;
}

/** Text / search input with recessed inset border; aqua focus ring. */
export function Input(props: InputProps): JSX.Element;
