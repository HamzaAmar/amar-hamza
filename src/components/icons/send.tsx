import * as React from 'react';

function send(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M9 18v4a1 1 0 001 1l3-4zM24 0h-1L0 12a1 1 0 001 1l6 2L20 4 10 16l10 4a1 1 0 001 0v-1l3-18V0z" />
    </svg>
  );
}

export default send;
