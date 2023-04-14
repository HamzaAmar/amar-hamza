import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m20 4-2 14.5-6 2-6-2L4 4h16Z" />
    <path d="M8.5 8h7L11 12h4l-.5 3.5-2.5.8-2.5-.8-.1-.5" />
  </svg>
);

export default SvgComponent;
