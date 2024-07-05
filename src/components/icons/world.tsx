import * as React from 'react';
import type { SvgType } from './utils/types';
import { svgProps } from './utils/config';

function warning(props: SvgType) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M4 9h16M4 15h16M11 3a17 17 0 0 0 0 18m2-18a17 17 0 0 1 0 18M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
    </svg>
  );
}

export default warning;
