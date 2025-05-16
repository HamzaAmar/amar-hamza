import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const codepen = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m3 15 9 6 9-6-9-6-9 6Z" />
    <path d="m3 9 9 6 9-6-9-6-9 6Zm0 0v6m18-6v6M12 3v6m0 6v6" />
  </svg>
);

export default codepen;
