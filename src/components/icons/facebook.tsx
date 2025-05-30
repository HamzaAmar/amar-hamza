import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const facebook = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H7Z" />
  </svg>
);

export default facebook;
