import { ROTATION, svgProps } from './utils/config';
import type { SvgWithDirection } from './utils/types';

const arrow = ({
  direction = 'bottom',
  ...rest
}: SvgWithDirection) => (
  <svg
    {...svgProps}
    transform={`rotate(${ROTATION[direction]})`}
    style={{ transform: `rotate(${ROTATION[direction]}deg)` }}
    {...rest}
  >
    <path d="M12 5v14m0 0 4-4m-4 4-4-4" />
  </svg>
);

export default arrow;
