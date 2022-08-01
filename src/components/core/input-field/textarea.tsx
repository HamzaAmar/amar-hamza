import React from 'react';

import type { TextAreaProps } from './input-field.type';
import InputField from './field-input';

const TextArea = (props: TextAreaProps) => {
  const {
    name,
    placeholder,
    onChange,
    error,
    touched,
    icon,
    value,
    ...rest
  } = props;
  return (
    <InputField icon={icon}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="input-field"
        onChange={onChange}
        data-error={touched && Boolean(error)}
        required
        rows={5}
        {...rest}
      >
        {value}
      </textarea>
    </InputField>
  );
};

export default TextArea;
