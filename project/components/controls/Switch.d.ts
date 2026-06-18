export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  label?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Pill toggle switch — aqua track when on. */
export function Switch(props: SwitchProps): JSX.Element;
