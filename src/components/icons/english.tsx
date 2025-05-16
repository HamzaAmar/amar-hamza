import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 4H7v16h10M7 12h8" />
  </svg>
);

export default SvgComponent;
