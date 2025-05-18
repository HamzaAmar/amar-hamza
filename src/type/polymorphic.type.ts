import type * as React from "react";

type Merge<P1, P2> = Omit<P1, keyof P2> & P2;

type PolymorphicComponentProps<
  ElementType extends React.ElementType,
  OwnProps = object,
> = OwnProps &
  Omit<React.ComponentPropsWithRef<ElementType>, keyof OwnProps | "as"> & {
    as?: ElementType;
  };

type Polymorphic<
  DefaultAs extends React.ElementType,
  OwnProps = object,
> = <ActualAs extends React.ElementType = DefaultAs>( // ActualAs is what 'as' is set to, defaults to DefaultAs
  props: PolymorphicComponentProps<ActualAs, OwnProps>
) => React.ReactElement | null;

export type {
  Merge,
  Polymorphic,
};
