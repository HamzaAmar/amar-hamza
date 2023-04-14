import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const bookmark = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3-5 3V6a2 2 0 0 1 2-2Z" />
  </svg>
);

export default bookmark;
