import * as React from 'react';
import { SVGProps } from 'react';

const node = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m20 4-2 14.5-6 2-6-2L4 4h16Z" />
    <path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.4a.5.5 0 0 1 .5.6l-.4 2.9-2 .5" />
  </svg>
);

export default node;
