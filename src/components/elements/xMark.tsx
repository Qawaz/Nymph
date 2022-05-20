import { FunctionComponent } from "react";

type Props = {
  width?: number;
  height?: number;
};

const XMark: FunctionComponent<Props> = ({
  width,
  height,
  ...props
}): JSX.Element => (
  <svg
    className="inline"
    width={width || 20}
    height={height || 20}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#f56565"
      d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"
    />
  </svg>
);

export default XMark;
