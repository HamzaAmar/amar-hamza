import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const ui = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M18 4H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
    <path d="M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-4h2m-2 4h2M7 16h10" />
  </svg>
);

export default ui;
