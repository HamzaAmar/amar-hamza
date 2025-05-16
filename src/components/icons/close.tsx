import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default SvgComponent;
