export interface TagProps {
  selected?: boolean;
  onClick?: () => void;
  removable?: boolean;
  onRemove?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Filter / category chip — selectable, optionally removable. */
export function Tag(props: TagProps): JSX.Element;
