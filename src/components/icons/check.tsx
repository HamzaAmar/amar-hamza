import * as React from 'react';
import type { SVGProps } from 'react';

const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m5 12 5 5L20 7" />
  </svg>
);

export default Check;
