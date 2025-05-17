import type { Polymorphic } from "@type/polymorphic.type";

import { c } from "@utils/classnames";

import type { ButtonProps, IconButtonProps } from "./button.type";

import { Spinner } from "..";

/*
=====================================================================================
    Button Component Section
=====================================================================================
*/

export const Button: Polymorphic<"button", ButtonProps> = (props) => {
  const {
    color = "p",
    size = "5",
    variant = "solid",
    corner = "circle",
    children,
    status = "idle",
    icon,
    iconPosition = "start",
    as: Comp = "button",
    fluid,
    disabled,
    className,
    ...rest
  } = props;
  const leftIcon = icon && iconPosition === "start" ? icon : null;
  const rightIcon = icon && iconPosition === "end" ? icon : null;
  const isLoading = status === "loading";

  const loading = isLoading || disabled ? { disabled: true } : {};
  const loadingUI = isLoading
    ? (
        <div className="loading-container">
          <Spinner />
        </div>
      )
    : null;

  const buttonClassNames = c(
    `ba- ba-${size} ba-${variant} Fc ba-${corner} C${color}`,
    { "ba-fluid": fluid, [className!]: className },
  );

  return (
    <Comp
      {...buttonClassNames}
      {...loading}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
      {loadingUI}
    </Comp>
  );
};

/*
=====================================================================================
    Icon Button Component Section
=====================================================================================
*/

export const IconButton: Polymorphic<"button", IconButtonProps> = (
  { icon, title, corner = "circle", color = "b", size = "5", className, as: Tag = "button", ...rest }) => {
  const iconButtonClassname = c(
    `ba-I ba-${size} ba-${corner} C${color} Fc`,
    className,
  );

  return (
    <Tag {...iconButtonClassname} {...rest}>
      <span className="Sr">{title}</span>
      <span className="Fc">{icon}</span>
    </Tag>
  );
};
