import * as React from 'react';
import { SVGProps } from 'react';

interface LevelProps extends SVGProps<SVGSVGElement> {
  level: number;
}

const PATH_LIST = ['M6 18V15', 'M10 18V12', 'M14 18V9', 'M18 18V6'];

const LevelComp = (props: LevelProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    {PATH_LIST.map((path, index) => {
      const strokeColor =
        index + 1 <= props.level
          ? 'var(--color-primary-4)'
          : 'var(--color-grey-1)';
      return <path key={path} d={path} stroke={strokeColor} />;
    })}
  </svg>
);

export default LevelComp;
