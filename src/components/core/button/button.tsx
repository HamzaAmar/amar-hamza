/* eslint-disable @typescript-eslint/naming-convention */
import React, { ComponentPropsWithoutRef } from 'react';
import { Loading } from '@components/core';

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

  const newChild =
    Comp === 'button' ? (
      <>
        <span
          data-loading={icon || status === 'loading'}
          className={styles.iconContainer}
        >
          {loading}
        </span>
        {children}
      </>
    ) : (
      children
    );

  return (
    <Comp className={rootStyle} {...rest}>
      {newChild}
    </Comp>
  );
};

export default button;
