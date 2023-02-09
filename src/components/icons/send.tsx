import * as React from 'react';
import type { SVGProps } from 'react';

const send = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
);

export default send;
