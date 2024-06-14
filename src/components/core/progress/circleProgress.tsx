import type { ProgressCircleProps } from './progress.type';
import { Flex } from '..';

const ProgressCircle = ({
  value = 50,
  color,
}: ProgressCircleProps) => {
  const radius = 100 / 2 - 5;
  const circumference = radius * 2 * Math.PI;

  const progress = (value / 100) * circumference;

  return (
    <Flex
      justify="center"
      items="center"
      className={`progress-circle u_${color}`}
    >
      <svg
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={100}
        aria-valuemin={100}
        aria-label={`Progress : ${value}%`}
        viewBox="0 0 100 100"
      >
        <circle
          className="progress-circle__background"
          r={radius}
          cx="50"
          cy="50"
        />
        <circle
          className="progress-circle__progress"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <text
          x="50"
          y="50"
          className="progress-circle__text"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {value}%
        </text>
      </svg>
    </Flex>
  );
};

export default ProgressCircle;
