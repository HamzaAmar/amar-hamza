import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const accessible = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M17 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-8 3a5 5 0 1 0 4 8" />
    <path d="m19 20-4-5h-4l3-5-4-3-4 1" />
  </svg>
);

export default accessible;
