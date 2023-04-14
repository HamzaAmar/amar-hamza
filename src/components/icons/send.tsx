import * as React from 'react';
import type { SvgType } from './utils/types';
import { svgProps } from './utils/config';

const send = (props: SvgType) => (
  <svg {...svgProps} {...props}>
    <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
);

export default send;
