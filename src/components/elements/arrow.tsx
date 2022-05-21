import { FunctionComponent } from "react";

type Props = {
  width?: number;
  height?: number;
};

const Arrow: FunctionComponent<Props> = ({
  width = 20,
  height = 20,
}): JSX.Element => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 511.996 511.996"
    xmlSpace="preserve"
    width={width}
    height={height}
  >
    <g>
      <g>
        <path
          d="M508.245,246.953L363.435,102.133c-5.001-5.001-13.099-5.001-18.099,0c-5.001,5-5.001,13.099,0,18.099l122.965,122.965
			H12.8c-7.074,0-12.8,5.726-12.8,12.8c0,7.074,5.726,12.8,12.8,12.8h455.492L345.327,391.763c-5.001,5-5.001,13.099,0,18.099
			c5.009,5.001,13.099,5.001,18.108,0l144.811-144.811C513.246,260.051,513.246,251.953,508.245,246.953z"
        />
      </g>
    </g>
  </svg>
);

export default Arrow;
