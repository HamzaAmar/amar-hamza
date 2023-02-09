import * as React from 'react';
import type { SVGProps } from 'react';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  direction?: keyof typeof rotation;
}

const rotation = {
  left: '90',
  right: '-90',
  top: '180',
  bottom: '0',
  'left-top': '135',
  'left-bottom': '45',
  'right-top': '-135',
  'right-bottom': '-45',
} as const;

const arrow = ({ direction = 'bottom', ...rest }: ArrowProps) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    transform={`rotate(${rotation[direction]})`}
    style={{ transform: `rotate(${rotation[direction]}deg)` }}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...rest}
    viewBox="0 0 24 24"
  >
    <path d="M12 5v14m0 0 4-4m-4 4-4-4" />
  </svg>
);

export default arrow;
