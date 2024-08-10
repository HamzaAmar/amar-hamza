import type { SpinnerProps } from './spinner.type';

export const Spinner = ({
  color = 'p',
  size = 'sm',
  invert,
}: SpinnerProps) => {
  const root = `s-p s-p_${size} u_${color}`;
  return <div data-invert={invert} className={root} />;
};
