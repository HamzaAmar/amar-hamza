import type { InputFieldProps } from './input.type';

const InputField = (props: InputFieldProps) => {
  const { icon, children } = props;
  return (
    <div className="input-field--container">
      {children}
      <div className="input-field--icon">{icon}</div>
    </div>
  );
};

export default InputField;
