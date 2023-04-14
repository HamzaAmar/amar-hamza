import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const SvgComponent = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6 0-1.2-.5-2.3-1.3-3.2a4 4 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a13 13 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4 4 0 0 0-.1 3.2c-.8.9-1.3 2-1.3 3.2 0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21m0-2c-4.3 1.4-4.3-2.5-6-3l6 3Z" />
  </svg>
);

export default SvgComponent;
