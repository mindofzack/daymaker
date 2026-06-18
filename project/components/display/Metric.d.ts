export interface MetricTrend { dir: 'up' | 'down' | 'flat'; value: string; }
export interface MetricProps {
  label?: React.ReactNode;
  value: React.ReactNode;
  unit?: React.ReactNode;
  /** Secondary line under the value. */
  sub?: React.ReactNode;
  trend?: MetricTrend;
  tone?: 'default' | 'accent' | 'caution' | 'avoid' | 'info';
  icon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/** Numeric readout (wind, waves, temp) — tabular value + unit + label. */
export function Metric(props: MetricProps): JSX.Element;
