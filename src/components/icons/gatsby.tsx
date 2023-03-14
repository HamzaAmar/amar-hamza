import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M17.8 5.1A9 9 0 1 0 21 12h-8" />
  </svg>
);

export default SvgComponent;
