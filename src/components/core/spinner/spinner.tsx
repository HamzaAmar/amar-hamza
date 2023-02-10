import type { SpinnerProps } from './spinner.type';

const spinner = ({
  color = 'primary',
  size = 'sm',
  invert,
}: SpinnerProps) => {
  const root = `spinner spinner__${size} u_${color}`;
  return <div data-inverted={invert} className={root} />;
};

export default spinner;
