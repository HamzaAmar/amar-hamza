import type { SVGProps } from 'react';

const remix = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M7 20V4h5.5a4.5 4.5 0 1 1 0 9H7m5 0 5 7"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default remix;
