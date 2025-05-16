import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19 5H5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export default SvgComponent;
