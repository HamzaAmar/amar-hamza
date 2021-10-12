/* eslint-disable @typescript-eslint/naming-convention */
import React, { ComponentPropsWithoutRef } from 'react';
import cn from 'classnames';
import { Loading } from '@components/ui';

import styles from './button.module.css';
import { ButtonProps } from './button.type';

const button = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>,
) => {
  const {
    children,
    icon,
    variant = 'contained',
    className,
    as: Comp = 'button',
    status = 'idle',
    ...rest
  } = props;

  const loading = status === 'loading' ? <Loading /> : icon;

  const rootStyle = `${styles.root} ${styles[variant]} ${className}`;

  return (
    <Comp className={rootStyle} {...rest}>
      <span
        className={cn(styles.iconContainer, {
          [styles.existIconOrLoading]: icon || status === 'loading',
        })}
      >
        {loading}
      </span>
      {children}
    </Comp>
  );
};

export default button;
