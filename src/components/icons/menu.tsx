import * as React from "react";

import { svgProps } from "./utils/config";
import type { SvgType } from "./utils/types";

function menu(props: SvgType) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M4 18h16M4 6h16H4zm0 6h16H4z" />
    </svg>
  );
}

export default menu;
