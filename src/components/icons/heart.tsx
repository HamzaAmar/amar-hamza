import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const heart = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M19.5 13.6 12 21l-7.5-7.4A5 5 0 1 1 12 7a5 5 0 1 1 7.5 6.6" />
  </svg>
);

export default heart;
