import type { SVGProps } from 'react';

const linkdin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18 4H6a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM8 11v5m0-8v0m4 8v-5" />
    <path d="M16 16v-3a2 2 0 0 0-4 0" />
  </svg>
);

export default linkdin;
