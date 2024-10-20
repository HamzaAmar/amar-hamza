import type { InputFieldProps } from './input-field.type';

const InputField = (props: InputFieldProps) => {
  const { icon, children, touched, error } = props;

  const iconIfExist = Boolean(icon) && (
    <div className="fic-I">{icon}</div>
  );
  const isError = touched && Boolean(error);

  return (
    <div data-error={isError} className="fi-C">
      {children}
      {iconIfExist}
    </div>
  );
};

export default InputField;
