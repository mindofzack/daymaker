export interface AvatarProps {
  src?: string;
  /** Name — used for initials fallback + alt text. */
  name?: string;
  size?: number;
  /** Aqua ring (active / live). */
  ring?: boolean;
  style?: React.CSSProperties;
}

/** Circular avatar with initials fallback. */
export function Avatar(props: AvatarProps): JSX.Element;
