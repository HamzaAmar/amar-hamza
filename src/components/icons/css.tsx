import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m20 4-2 14.5-6 2-6-2L4 4h16Z" />
    <path d="M8.5 8h7L11 12h4l-.5 3.5-2.5.8-2.5-.8-.1-.5" />
  </svg>
);

export default SvgComponent;
