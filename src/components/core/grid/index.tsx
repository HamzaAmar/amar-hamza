import { classnames } from '@utils/classnames';
import { forwardRef } from 'react';
import type { CSSProperties } from 'react';
import type { ForwardRefComponent } from '@type/polymorphic.type';

import type { GridItemProps, GridProps } from './grid.type';

const getStyles = (obj?: { [key: string]: unknown }) => {
  if (!obj) return;
  const newObj: { [key: string]: unknown } = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      newObj[`--${key}`] = value;
    }
  }
  return newObj as CSSProperties;
};

const Item = forwardRef((props, ref) => {
  const {
    column,
    row,
    area,
    children,
    style,
    className,
    as: Tag = 'div',
  } = props;

  const gridClassName = classnames('g-r-itm', {
    className: Boolean(className),
    style: Boolean(style),
  });

  const regularStyle = getStyles({ column, row, area });

  return (
    <Tag
      style={{
        ...regularStyle,
        ...style,
      }}
      {...gridClassName}
    >
      {children}
    </Tag>
  );
}) as ForwardRefComponent<'div', GridItemProps>;

Item.displayName = 'GridItem';

export const Grid = forwardRef((props, forwardedRef) => {
  const {
    gap,
    columns,
    rows,
    items,
    justify,
    areas,
    children,
    style,
    className,
    as: Tag = 'div',
  } = props;
  const gridClassName = classnames('g-r', {
    [`u_justify-${justify}`]: Boolean(justify),
    [`u_items-${items}`]: Boolean(items),
    [`g-r_${gap}`]: Boolean(gap),
    [className!]: Boolean(className),
  });

  const regularStyle = getStyles({ columns, rows, areas });

  return (
    <Tag
      style={{
        ...regularStyle,
        ...style,
      }}
      {...gridClassName}
      ref={forwardedRef}
    >
      {children}
    </Tag>
  );
}) as ForwardRefComponent<'div', GridProps> & { Item: typeof Item };

Grid.Item = Item;
