import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const fast = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm1.4-3.4 2.1-2.1" />
    <path d="M6.4 20a9 9 0 1 1 11.2 0H6.4Z" />
  </svg>
);

export default fast;
