import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const pin = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m17.7 16.7-4.3 4.2a2 2 0 0 1-2.8 0l-4.3-4.2a8 8 0 1 1 11.4 0v0Z" />
    <path
      fill="currentColor"
      d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </svg>
);

export default pin;
