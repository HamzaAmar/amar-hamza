import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 9h16.8M3.6 15h16.8" />
    <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
  </svg>
);

export default SvgComponent;
