import React, {
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';

import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leftIcon?: ReactNode;
}

const Input = ({
  name,
  type = 'text',
  placeholder,
  label,
  onChange,
  required,
  leftIcon,
}: InputProps) => {
  const [message, setMessage] = useState<string | null>(null);
  const requiredSign = required ? (
    <abbr className={styles.abbr} title={`${name} field is required`}>
      *
    </abbr>
  ) : null;
  const messageError = message ? (
    <div className={styles.messageContainer}>
      <small className={styles.message}>{message}</small>
    </div>
  ) : null;
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.input}
          onChange={onChange}
          required
        />
      </div>

      {messageError}
    </div>
  );
};

export default Input;
