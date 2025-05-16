import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const layout = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 5H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1Zm5 2h6m-6 4h6M4 15h16M4 19h16" />
  </svg>
);

export default layout;
