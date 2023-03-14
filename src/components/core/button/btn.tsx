import React from 'react';
import type {
  ReactElement,
  ReactNode,
  ButtonHTMLAttributes,
} from 'react';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'solid' | 'outline' | 'soft';
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  children: ReactNode;
  icon: ReactElement;
}

// In this example we need to show you what is block , element , modifier

const button = ({
  variant,
  color,
  children,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`btn btn__${color} btn__${variant}`}
      type="button"
      {...rest}
    >
      <span className="btn--icon btn--icon__left">{icon}</span>
      <span className="btn--content">{children}</span>
      <span className="btn--icon btn--icon__right">{icon}</span>
      <span className="btn--skeleton" />
    </button>
  );
};

export default button;
