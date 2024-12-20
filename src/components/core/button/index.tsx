/* eslint-disable @typescript-eslint/naming-convention */
import { forwardRef } from 'react';
import type { ForwardRefComponent } from '@type/polymorphic.type';
import { c } from '@utils/classnames';

import { Spinner } from '..';

import type { ButtonProps, IconButtonProps } from './button.type';

/*
=====================================================================================
    Button Component Section
=====================================================================================
*/

export const Button = forwardRef((props, forwardedRef) => {
  const {
    color = 'p',
    size = '5',
    variant = 'solid',
    corner = 'circle',
    children,
    status = 'idle',
    icon,
    iconPosition = 'start',
    as: Comp = 'button',
    fluid,
    disabled,
    className,
    ...rest
  } = props;
  const leftIcon = icon && iconPosition === 'start' ? icon : null;
  const rightIcon = icon && iconPosition === 'end' ? icon : null;
  const isLoading = status === 'loading';

  const loading = isLoading || disabled ? { disabled: true } : {};
  const loadingUI = isLoading ? (
    <div className="loading-container">
      <Spinner />
    </div>
  ) : null;

  const buttonClassNames = c(
    `ba- ba-${size} ba-${variant} Fc ba-${corner} C${color}`,
    { 'ba-fluid': fluid, [className!]: className },
  );

  return (
    <Comp
      {...buttonClassNames}
      {...loading}
      {...rest}
      ref={forwardedRef}
    >
      {leftIcon}
      {children}
      {rightIcon}
      {loadingUI}
    </Comp>
  );
}) as ForwardRefComponent<'button', ButtonProps>;

Button.displayName = 'Button';

/*
=====================================================================================
    Icon Button Component Section
=====================================================================================
*/

export const IconButton = forwardRef(
  (
    {
      icon,
      title,
      corner = 'circle',
      color = 'b',
      size = '5',
      variant = 'transparent',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef,
  ) => {
    const iconButtonClassname = c(
      `ba-I ba-${size} ba-${corner} C${color} Fc`,
      className,
    );

    return (
      <Tag {...iconButtonClassname} ref={forwardedRef} {...rest}>
        <span className="Sr">{title}</span>
        <span className="Fc">{icon}</span>
      </Tag>
    );
  },
) as ForwardRefComponent<'button', IconButtonProps>;

IconButton.displayName = 'Icon Button';
