import type {
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';

interface BaseProps {
  icon: ReactElement;
  error: string;
  touched: boolean;
}

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    BaseProps {}

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    BaseProps {}

export interface InputFieldProps {
  children: ReactNode;
  icon: ReactElement;
  error: string;
  touched: boolean;
}
