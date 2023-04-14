import * as React from 'react';
import type { SvgType } from './utils/types';

function Eye(props: SvgType) {
  return (
    <svg viewBox="0 0 461.3 461.3" {...props}>
      <path d="M231 156a74 74 0 100 149 74 74 0 000-149zm-6 53c-9 0-17 7-17 17h-24c0-24 18-42 41-42v25z" />
      <path d="M456 215C431 184 341 82 231 82S30 184 5 215c-7 9-7 22 0 31 25 31 115 133 226 133s200-102 225-133c7-9 7-21 0-31zM231 338a108 108 0 110-215 108 108 0 010 215z" />
    </svg>
  );
}

export default Eye;
