import * as React from "react";

import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

function success(props: SvgType) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M497 70c-7-8-19-8-27 0L239 301l-84-91a19 19 0 00-28 26l97 106c3 4 8 6 14 6 5 0 10-2 14-6L497 97c8-7 8-19 0-27z" />
      <path d="M493 237c-11 0-20 8-20 19A218 218 0 11256 39a19 19 0 100-39 256 256 0 10256 256c0-11-9-19-19-19z" />
    </svg>
  );
}

export default success;
