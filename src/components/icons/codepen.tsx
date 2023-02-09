import type { SVGProps } from 'react';

const codepen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m3 15 9 6 9-6-9-6-9 6Z" />
    <path d="m3 9 9 6 9-6-9-6-9 6Zm0 0v6m18-6v6M12 3v6m0 6v6" />
  </svg>
);

export default codepen;
