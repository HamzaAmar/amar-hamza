/* eslint-disable @typescript-eslint/naming-convention */
import React, { ComponentPropsWithoutRef } from 'react';
import { Loading } from '@components/core';
import { classnames } from '@utils/classnames';

import { ButtonProps } from './button.type';

export const Button = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>,
) => {
  const {
    children,
    icon,
    variant = 'contained',
    className,
    as: Comp = 'button',
    size = 'md',
    status = 'idle',
    color = 'primary',
    ...rest
  } = props;

  const loading = status === 'loading' ? <Loading /> : icon;

  const style = classnames(
    `btn btn--${variant} btn--${size} u_${color}`,
    { [className!]: Boolean(className) },
  );

  const newChild =
    Comp === 'button' ? (
      <>
        <span
          data-loading={icon || status === 'loading'}
          className="iconContainer"
        >
          {loading}
        </span>
        {children}
      </>
    ) : (
      children
    );

  return (
    <Comp {...style} {...rest}>
      {newChild}
    </Comp>
  );
};

export const IconButton = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C> &
    Omit<ComponentPropsWithoutRef<C>, keyof ButtonProps<C>>,
) => {
  const {
    icon,
    className,
    size = 'md',
    as: Comp = 'button',
    color = 'primary',
    ...rest
  } = props;

  const rootStyle = `btn btn--icon btn--outline btn--${size} u_${color}  ${className}`;

  return <Comp className={rootStyle} icon={icon} {...rest} />;
};
