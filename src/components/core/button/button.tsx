/* eslint-disable @typescript-eslint/naming-convention */
import { forwardRef } from 'react';
import type { ForwardRefComponent } from '@type/polymorphic.type';
import { classnames } from '@utils/classnames';

import { Spinner, Flex } from '..';

import { ButtonProps, IconButtonProps } from './button.type';

/*
=====================================================================================
    Button Component Section
=====================================================================================
*/

export const Button = forwardRef((props, forwardedRef) => {
  const {
    color = 'primary',
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
    `btn btn__${size} btn__${variant} btn__${corner}`,
    { fluid__button: fluid },
    `u_${color}`,
  );

  const buttonFluidClassName = classnames('btn--wrapper', {
    'btn--wrapper__fluid': fluid,
    [className!]: Boolean(className),
  });

  const isLoading = props.status === 'loading' ? 'loading' : 'idle';
  const buttonState = props.disabled ? 'disabled' : isLoading;

  return (
    // I add Button Wrapper For to add Cursor disabled when the button is pointer event none
    <div {...buttonFluidClassName} data-state={buttonState}>
      <Flex
        as={Comp}
        items="center"
        inline
        {...buttonClassNames}
        {...loading}
        {...rest}
        ref={forwardedRef}
      >
        {leftIcon}
        {children}
        {rightIcon}
        {loadingUI}
      </Flex>
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
      color = 'slate',
      size = 'md',
      variant = 'transparent',
      className,
      as: Tag = 'button',
      ...rest
    },
    forwardedRef,
  ) => {
    const iconButtonClassname = classnames(
      `btn--icon btn__${size} btn__${corner} u_${color}`,
      className,
    );

    return (
      <Flex
        items="center"
        justify="center"
        as={Tag}
        {...iconButtonClassname}
        ref={forwardedRef}
        {...rest}
      >
        <span className="u_sr-only">{title}</span>
        <Flex as="span" items="center" justify="center">
          {icon}
        </Flex>
      </Flex>
    );
  },
) as ForwardRefComponent<'button', IconButtonProps>;

IconButton.displayName = 'Icon Button';
