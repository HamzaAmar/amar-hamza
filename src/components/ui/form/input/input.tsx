import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import styles from './input.module.css';

interface Input extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  leftIcon?: ReactNode;
}

const input = ({
  name,
  type = 'text',
  placeholder,
  label,
  onChange,
  required,
}: Input) => {
  const [message, setMessage] = React.useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>
          {label}
          {required ? (
            <abbr
              className={styles.abbr}
              title={`${name} field is required`}
            >
              *
            </abbr>
          ) : null}
        </label>
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

      {message ? (
        <div className={styles.messageContainer}>
          <small className={styles.message}>{message}</small>
        </div>
      ) : null}
    </div>
  );
};

export default input;
