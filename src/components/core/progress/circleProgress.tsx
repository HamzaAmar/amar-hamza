import React, { ReactNode } from 'react';

type Color = 'primary';

interface Props extends React.SVGProps<SVGSVGElement> {
  children: ReactNode;
  lvl: number;
  color: Color;
}

const circleProgress = ({
  children,
  color = 'primary',
  lvl,
  ...rest
}: Props) => {
  return (
    <div className={`svg-chart u_${color}`}>
      <svg
        viewBox="0 0 36 36"
        className="circle-chart"
        fill={color}
        {...rest}
      >
        <path
          className="circle-chart--stroke"
          d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle-chart--progress"
          stroke="red"
          strokeDasharray={`${lvl} 100`}
          d="M18 2.0845
  a 15.9155 15.9155 0 0 1 0 31.831
  a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text
          x="18"
          y="20.35"
          fill="red"
          className="circle-chart--text"
        >
          {children}
        </text>
      </svg>
    </div>
  );
};

export default circleProgress;
