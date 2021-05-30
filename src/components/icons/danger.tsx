import * as React from 'react';

function danger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M256 0a256 256 0 101 513 256 256 0 00-1-513zm0 448a192 192 0 01-156-303l267 267c-32 24-71 36-111 36zm156-81L145 100a192 192 0 01268 268z" />
    </svg>
  );
}

export default danger;
