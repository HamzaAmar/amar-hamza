import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const instagram = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Z" />
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm4.5-7.5v0" />
  </svg>
);

export default instagram;
