import { svgProps } from "./utils/config";
import type { SvgType } from "./utils/types";

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 15V9l7.75 10.65a9 9 0 1 1 2.25-2M15 12V9" />
  </svg>
);

export default SvgComponent;
