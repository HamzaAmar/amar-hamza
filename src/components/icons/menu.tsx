import * as React from 'react';

function menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 480 480" fill="currentColor" {...props}>
      <path d="M240 0a240 240 0 100 480 240 240 0 000-480zm0 464a224 224 0 110-448 224 224 0 010 448z" />
      <path d="M336 232H144a8 8 0 000 16h192a8 8 0 000-16zm0 80H144a8 8 0 000 16h192a8 8 0 000-16zm0-160H144a8 8 0 000 16h192a8 8 0 000-16z" />
    </svg>
  );
}

export default menu;
