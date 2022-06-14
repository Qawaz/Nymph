import { FunctionComponent } from "react";

type Props = {
  width?: number;
  height?: number;
};

const Checkmark: FunctionComponent<Props> = ({
  width,
  height,
  ...props
}): JSX.Element => (
  <svg width={width || 20} height={height || 20} viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10" style={{ fill: "#183964" }} />
    <path
      d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
      style={{ fill: "#fae06a" }}
    />
  </svg>
);

export default Checkmark;
