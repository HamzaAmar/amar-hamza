import type { SpinnerProps } from "./spinner.type";

export const Spinner = ({
  color = "p",
  size = "4",
  invert,
}: SpinnerProps) => {
  const root = `sp- sp-${size} C${color}`;
  return <div data-invert={invert} className={root} />;
};
