import type { SvgType } from "./utils/types";

import { svgProps } from "./utils/config";

type LevelProps = {
  level: number;
} & SvgType;

const PATH_LIST = ["M6 18V15", "M10 18V12", "M14 18V9", "M18 18V6"];

const LevelComp = (props: LevelProps) => (
  <svg {...svgProps} {...props}>
    {PATH_LIST.map((path, index) => {
      const strokeColor
        = index + 1 <= props.level ? "var(--P9)" : "var(--B10)";
      return <path key={path} d={path} stroke={strokeColor} />;
    })}
  </svg>
);

export default LevelComp;
