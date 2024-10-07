import React from 'react';
import { svgProps } from './utils/config';
import type { SvgType } from './utils/types';

const server = (props: SvgType) => {
  return (
    <svg {...svgProps} {...props}>
      <path d="M18 8a3 3 0 0 1 0 6m-8-6v11a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-5m5-6 5-4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1l-5-4H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h8Z" />
    </svg>
  );
};

export default server;
