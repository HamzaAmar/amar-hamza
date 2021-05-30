import * as React from 'react';

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      <path d="M393 124L180 338a41 41 0 01-58 0L12 228a41 41 0 0157-58l82 82L336 67a41 41 0 0157 57z" />
    </svg>
  );
}

export default Check;
