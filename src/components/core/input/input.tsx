import type { InputHTMLAttributes, ReactElement } from 'react';
import { FormContainer } from '@components/ui';

import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactElement;
}

const Input = (props: InputProps) => {
  const {
    name,
    label,
    required,
    type = 'text',
    icon,
    placeholder,
    onChange,
  } = props;
  return (
    <FormContainer name={name} label={label} required={required}>
      <div className={styles.inputContainer}>
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          onChange={onChange}
          required={required}
        />
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.line} />
      </div>
    </FormContainer>
  );
};

export default Input;
