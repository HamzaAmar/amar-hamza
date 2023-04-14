import type { SvgType } from './utils/types';

import { svgProps } from './utils/config';

const Check = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export default Check;
