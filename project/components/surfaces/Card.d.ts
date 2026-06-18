export interface CardProps {
  /** Resting drop shadow. */
  elevated?: boolean;
  /** Lighten + lift on hover (grid cards). */
  hoverable?: boolean;
  padding?: number;
  /** Top media slot (image/map thumb) — rendered full-bleed. */
  media?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Base surface container — spots, reports, settings groups. */
export function Card(props: CardProps): JSX.Element;
