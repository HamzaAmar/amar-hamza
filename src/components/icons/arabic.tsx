import type { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-3m-4 9v0m7-4v0m3 0h2a2 2 0 0 0 1.7-3.1L18 8"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
