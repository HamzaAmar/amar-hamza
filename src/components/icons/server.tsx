import React from "react";

import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

const server = (props: SvgType) => {
  return (
    <svg {...svgProps} {...props}>
      <path d="M18 12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3m12 0H6m12 0a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3m1-4v.01M7 16v.01" />
    </svg>
  );
};

export default server;
