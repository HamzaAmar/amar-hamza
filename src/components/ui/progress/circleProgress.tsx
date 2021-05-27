import React, { CSSProperties, FC, ReactNode } from 'react';
import style from './circleProgress.module.css';
import cn from 'classnames';

type Color = 'green' | 'red' | 'purple' | 'yellow' | 'orange';

type Props = {
  children: ReactNode;
  lvl: number;
  color: Color;
  styles?: CSSProperties;
  width: number;
  height: number;
};

const circleProgress: FC<Props> = ({
  children,
  color = '#DAA45C',
  lvl,
  styles,
  width,
  height,
}) => {
  return (
    <div className={style.chartSvg}>
      <svg
        viewBox="0 0 36 36"
        width={width}
        height={height}
        className={cn(style.circularChart, style[color])}
        style={styles}
      >
        <path
          className={style.circleBg}
          d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <path
          className={style.circle}
          stroke-dasharray={`${lvl} 100`}
          d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <text x="18" y="20.35" className={style.percentage}>
          {children}
        </text>
      </svg>
    </div>
  );
};

export default circleProgress;
