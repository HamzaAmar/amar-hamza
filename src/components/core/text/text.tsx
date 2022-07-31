import { classnames } from '@utils/classnames';

import { TextProps } from './text.type';

const text = (props: TextProps) => {
  const {
    as: Comp = 'p',
    variant = 'body',
    color = 'primary',
    truncate = 'none',
    children,
    className,
  } = props;
  let multiline;
  if (props.truncate === 'multiline') {
    multiline = props.multiline;
  }
  const classname = classnames(
    `text text__${variant}  text__${color} u_${truncate}`,
    { [className!]: Boolean(className) },
  );
  return (
    <Comp {...classname} style={{ '--multi-line': multiline }}>
      {children}
    </Comp>
  );
};

export default text;
