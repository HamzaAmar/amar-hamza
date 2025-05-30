import * as React from "react";

import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

function danger(props: SvgType) {
  return (
    <svg {...svgProps} {...props}>
      <path d="M12 8v4m0 4h0m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

export default danger;
