import { c } from "@utils/classnames";
import React from "react";

import InputField from "./field-input";
import type { TextAreaProps } from "./input-field.type";

const TextArea = (props: TextAreaProps) => {
  const { error, touched, icon, value, ...rest } = props;

  const iconClassName = c("fi-", {
    "fi-I": !!icon,
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
