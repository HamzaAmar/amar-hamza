import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const sun = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M3 12h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
  </svg>
);

export default sun;
