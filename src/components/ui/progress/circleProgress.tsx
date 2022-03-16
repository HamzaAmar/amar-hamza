import React, { ReactNode } from 'react';

import style from './circleProgress.module.css';

interface Props extends React.SVGProps<SVGSVGElement> {
  children: ReactNode;
  lvl: number;
}

const circleProgress = ({
  children,
  color = '#DAA45C',
  lvl,
  ...rest
}: Props) => {
  return (
    <div className={style.chartSvg}>
      <svg
        viewBox="0 0 36 36"
        className={`${style.circularChart} ${style[color]}`}
        {...rest}
      >
        <path
          className={style.circleBg}
          d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className={style.circle}
          strokeDasharray={`${lvl} 100`}
          d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className={style.percentage}>
          {children}
        </text>
      </svg>
    </div>
  );
};

export default circleProgress;
