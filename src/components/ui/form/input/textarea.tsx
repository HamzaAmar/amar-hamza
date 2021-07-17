import React, { FC, ReactNode, TextareaHTMLAttributes } from 'react';
import styles from './input.module.css';

interface TextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const input = ({
  name,
  placeholder,
  label,
  onChange,
  required,
}: TextArea) => {
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
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          rows={5}
          name={name}
        ></textarea>
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
