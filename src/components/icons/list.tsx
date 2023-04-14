import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 3H7a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM9 7h6m-6 4h6m-6 4h4" />
  </svg>
);

export default SvgComponent;
