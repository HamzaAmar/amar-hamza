import * as React from 'react';

function map(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M256 0C154 0 71 83 71 185c0 127 166 314 173 321 6 8 18 8 24 0 7-7 173-194 173-321C441 83 358 0 256 0zm0 279a93 93 0 110-187 93 93 0 010 187z" />
    </svg>
  );
}

export default map;
