import * as React from 'react';

function warning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M504 395L308 56a60 60 0 00-52-30c-22 0-41 12-52 30L8 395a60 60 0 000 61c11 18 31 30 52 30h392c21 0 41-12 52-30 11-19 11-42 0-61zm-26 46c-6 9-15 15-26 15H60c-11 0-20-6-26-15-5-10-5-21 0-31L230 71c5-9 15-15 26-15s21 6 26 15l196 339c5 10 5 21 0 31z" />
      <path d="M241 176h30v150h-30zm15 180a20 20 0 100 40 20 20 0 000-40z" />
    </svg>
  );
}

export default warning;
