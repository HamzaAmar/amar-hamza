/* eslint-disable @typescript-eslint/naming-convention */
import { forwardRef } from 'react';
import type { ForwardRefComponent } from '@type/polymorphic.type';
import { classnames } from '@utils/classnames';

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
    size = 'md',
    variant = 'solid',
    corner = 'circle',
    children,
    status = 'idle',
    icon,
    iconPosition = 'start',
    as: Comp = 'button',
    fluid,
    className,
    ...rest
  } = props;
  const leftIcon = icon && iconPosition === 'start' ? icon : null;
  const rightIcon = icon && iconPosition === 'end' ? icon : null;
  const loading = status === 'loading' ? { disabled: true } : {};
  const loadingUI =
    status === 'loading' ? (
      <div className="loading-container">
        <Spinner />
      </div>
    ) : null;

  const buttonClassNames = classnames(
    `btn btn_${size} btn_${variant} u_center btn_${corner} u_${color}`,
    { 'btn-fluid': fluid },
  );

  const buttonFluidClassName = classnames('btn-wrapper', {
    'btn-fluid': fluid,
    [className!]: Boolean(className),
  });

  const isLoading = props.status === 'loading' ? 'loading' : 'idle';
  const buttonState = props.disabled ? 'disabled' : isLoading;

  return (
    // I add Button Wrapper For to add Cursor disabled when the button is pointer event none
    <div {...buttonFluidClassName} data-state={buttonState}>
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
    </div>
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
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef,
  ) => {
    const iconButtonClassname = classnames(
      `btn-icon btn_${size} btn_${corner} u_${color} u_center`,
      className,
    );

    return (
      <Tag {...iconButtonClassname} ref={forwardedRef} {...rest}>
        <span className="u_sr-only">{title}</span>
        <span className="u_center">{icon}</span>
      </Tag>
    );
  },
) as ForwardRefComponent<'button', IconButtonProps>;

IconButton.displayName = 'Icon Button';
