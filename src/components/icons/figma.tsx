import React from 'react';
import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const figma = (props: SvgType) => {
  return (
    <svg {...svgProps} {...props}>
      <path d="M15 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 0a3 3 0 0 0 0-6H9a3 3 0 1 0 0 6m6 0H9m0 0a3 3 0 1 0 0 6m0 0h3m-3 0a3 3 0 1 0 3 3V3" />
    </svg>
  );
};

export default figma;
