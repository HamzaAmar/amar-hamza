import type { InputProps } from './input-field.type';

import { InputField } from '.';

const Input = (props: InputProps) => {
  const {
    name,
    required,
    type = 'text',
    icon,
    touched,
    error,
    ...rest
  } = props;
  return (
    <InputField icon={icon}>
      <input
        id={name}
        name={name}
        type={type}
        data-error={touched && Boolean(error)}
        className="input-field"
        required={required}
        {...rest}
      />
    </InputField>
  );
};

export default Input;
