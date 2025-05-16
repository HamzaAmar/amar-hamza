import type { ProgressCircleProps } from "./progress.type";

export const CircleProgress = ({
  value = 50,
  color,
}: ProgressCircleProps) => {
  const radius = 100 / 2 - 5;
  const circumference = radius * 2 * Math.PI;

  const progress = (value / 100) * circumference;

  return (
    <div className={`pr-c C${color} Fc`}>
      <svg
        role="progressbar"
        aria-valuenow={value}
        aria-valuemax={100}
        aria-valuemin={100}
        aria-label={`Progress : ${value}%`}
        viewBox="0 0 100 100"
      >
        <circle className="pr-c-bg" r={radius} cx="50" cy="50" />
        <circle
          className="pr-c-amt"
          r={radius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
        <text
          x="50"
          y="50"
          className="pr-c-txt"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {value}
          %
        </text>
      </svg>
    </div>
  );
};
