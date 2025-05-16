import { c } from "@utils/classnames";

import type { InputProps } from "./input-field.type";

import InputField from "./field-input";

const Input = (props: InputProps) => {
  const { type = "text", icon, touched, error, ...rest } = props;

  const iconClassName = c("fi-", {
    "fi-I": !!icon,
  });

  return (
    <InputField icon={icon} touched={touched} error={error}>
      <input type={type} {...iconClassName} {...rest} />
    </InputField>
  );
};

export default Input;
