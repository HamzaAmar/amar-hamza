// import type { SvgType } from './utils/types';

import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

// import { svgProps } from './utils/config';

// const Check = (props: SvgType) => (
//   <svg {...svgProps} {...props}>
//     <path d="m5 12 5 5L20 7" />
//   </svg>
// );

// export default Check;

const circleCheck = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m9 12 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export default circleCheck;
