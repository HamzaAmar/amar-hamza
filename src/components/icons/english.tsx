import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 4H7v16h10M7 12h8" />
  </svg>
);

export default SvgComponent;
