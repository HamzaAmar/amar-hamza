import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const Users = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M8 21v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m1-11h2a2 2 0 0 1 2 2v1M3 13v-1a2 2 0 0 1 2-2h2m3 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm5-8a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
  </svg>
);

export default Users;
