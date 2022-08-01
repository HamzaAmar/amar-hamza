import type {
  ReactNode,
  ElementType,
  ComponentPropsWithoutRef,
} from 'react';

type Color =
  | 'primary'
  | 'secondary'
  | 'blue'
  | 'grey'
  | 'danger'
  | 'warning'
  | 'success';
type Variant =
  | 'display'
  | 'subheading1'
  | 'subheading2'
  | 'body'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'overline';
type Truncate = 'none' | 'multiline' | 'oneline';
type Weight = 'normal' | 'bold' | 'semi_bold';
type AS = 'p' | 'span' | 'label' | 'small' | 'b' | 'time';

export interface BaseTextProps<T> {
  as?: T;
  variant?: Variant;
  color?: Color;
  children: ReactNode;
  className?: string;
  weight?: Weight;
}

export interface Others<T extends ElementType>
  extends BaseTextProps<T> {
  truncate?: 'none' | 'oneline';
}
export interface MultilineProps<T extends ElementType>
  extends BaseTextProps<T> {
  truncate: 'multiline';
  multiline: number;
}

export type TextTypeProps<T extends ElementType> =
  | Others<T>
  | MultilineProps<T>;

export type TextProps<T extends ElementType = ElementType> =
  TextTypeProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof TextTypeProps<T>>;
