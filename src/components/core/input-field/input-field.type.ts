import type {
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

type BaseProps = {
  icon: ReactElement;
  error?: string;
  touched?: boolean;
};

export type InputProps = {} & InputHTMLAttributes<HTMLInputElement> & BaseProps;

export type TextAreaProps = {} & TextareaHTMLAttributes<HTMLTextAreaElement> & BaseProps;

export type InputFieldProps = {
  children: ReactNode;
  icon: ReactElement;
  error?: string;
  touched?: boolean;
};
