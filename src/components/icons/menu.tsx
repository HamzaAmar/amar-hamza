import * as React from "react";

import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

function menu(props: SvgType) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M4 18h16M4 6h16H4zm0 6h16H4z" />
    </svg>
  );
}

export default menu;
