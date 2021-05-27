import React, {
  ReactNode,
  CSSProperties,
  ButtonHTMLAttributes,
} from 'react';
import styles from './button.module.css';
import cn from 'classnames';

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
};

type Variant = 'success' | 'warning' | 'danger' | 'info' | 'primary';
type Size = 'small' | 'medium' | 'big' | 'fluid';

const button = ({
  children,
  style,
  type = 'submit',
  size = 'medium',
  variant = 'primary',
  onClick,
}: IProps) => {
  const buttonClassName = cn(styles.button, {
    [styles.small]: size === 'small',
    [styles.medium]: size === 'medium',
    [styles.big]: size === 'big',
    [styles.fluid]: size === 'fluid',

    [styles.success]: variant === 'success',
    [styles.warning]: variant === 'warning',
    [styles.danger]: variant === 'danger',
    [styles.info]: variant === 'info',
    [styles.primary]: variant === 'primary',
  });
  return (
    <button
      className={cn(buttonClassName)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default button;
