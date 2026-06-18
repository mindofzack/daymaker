export interface IconButtonProps {
  /** surface = dark circle; accent = aqua (play); ghost; outline. */
  variant?: 'surface' | 'accent' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (icon-only button). */
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Circular icon-only control — play, nav, overflow menus. */
export function IconButton(props: IconButtonProps): JSX.Element;
