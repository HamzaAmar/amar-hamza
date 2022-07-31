import type { SVGProps } from 'react';

const ui = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 4H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z" />
    <path d="M9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-4h2m-2 4h2M7 16h10" />
  </svg>
);

export default ui;
