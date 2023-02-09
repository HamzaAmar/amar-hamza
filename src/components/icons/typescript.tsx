import { SVGProps } from 'react';

const typescript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    fill="none"
  >
    <path d="m20 4-2 14.5-6 2-6-2L4 4h16Z" fill="none" />
    <path
      fill="none"
      d="M16.5 8H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.4a.5.5 0 0 1 .5.6l-.4 2.9-2 .5M7 8h2m2 0H9m0 0v8"
    />
  </svg>
);

export default typescript;
