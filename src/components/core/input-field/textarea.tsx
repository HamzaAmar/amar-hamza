import React from 'react';
import { classnames } from '@utils/classnames';

import type { TextAreaProps } from './input-field.type';
import InputField from './field-input';

const TextArea = (props: TextAreaProps) => {
  const { error, touched, icon, value, ...rest } = props;

  const iconClassName = classnames('input-field', {
    ['input__icon-exist'!]: Boolean(icon),
  });

  return (
    <InputField icon={icon} touched={touched} error={error}>
      <textarea {...iconClassName} required rows={5} {...rest}>
        {value}
      </textarea>
    </InputField>
  );
};

export default TextArea;
