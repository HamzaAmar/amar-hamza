import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
  </svg>
);

export default SvgComponent;
