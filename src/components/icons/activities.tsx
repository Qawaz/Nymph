import { SVGProps } from "react";

const ActivitiesIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M112.91,128A191.85,191.85 0,0 0,64 254c-1.18,106.35 85.65,193.8 192,194 106.2,0.2 192,-85.83 192,-192 0,-104.54 -83.55,-189.61 -187.5,-192a4.36,4.36 0,0 0,-4.5 4.37V152"
      strokeLinejoin="round"
      strokeWidth="32"
      fill="#00000000"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M233.38,278.63l-79,-113a8.13,8.13 0,0 1,11.32 -11.32l113,79a32.5,32.5 0,0 1,-37.25 53.26,33.21 33.21,0 0,1 -8.07,-7.94z"
      fill="currentColor"
    />
  </svg>
);

export default ActivitiesIcon;
