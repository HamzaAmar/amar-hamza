import React from "react";

import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const browser = (props: SvgType) => {
  return (
    <svg {...svgProps} {...props}>
      <path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 0h8.4m-5.802 4.5-4.2 7.275M9.402 13.5l-4.2-7.275M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12Z" />
    </svg>
  );
};

export default browser;
