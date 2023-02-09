import * as React from 'react';

const moon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
    {...props}
  >
    <path d="M12 3h.4a7.5 7.5 0 0 0 8 12.4A9 9 0 1 1 12 3v0Z" />
  </svg>
);

export default moon;
