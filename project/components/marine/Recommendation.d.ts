export interface RecommendationProps {
  /** The verdict — drives color (Go=aqua, Caution=amber, Avoid=red). */
  verdict?: 'go' | 'caution' | 'avoid';
  /** One-line headline, e.g. "Good window 6a–11a". */
  title?: React.ReactNode;
  /** Plain-English explanation. */
  summary?: React.ReactNode;
  /** Time window label, e.g. "Today · departs 7:00a". */
  window?: React.ReactNode;
  /** card = full panel; pill = compact inline verdict. */
  variant?: 'card' | 'pill';
  style?: React.CSSProperties;
}

/**
 * The signature DayMaker verdict — Go / Caution / Avoid with a plain-English read.
 * @startingPoint section="Marine" subtitle="Go / Caution / Avoid recommendation card" viewport="700x180"
 */
export function Recommendation(props: RecommendationProps): JSX.Element;
