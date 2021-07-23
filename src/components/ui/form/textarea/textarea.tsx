import React, { FC, ReactNode, TextareaHTMLAttributes } from 'react';
import styles from './textarea.module.css';

interface TextArea
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const textarea = ({
  name,
  placeholder,
  label,
  onChange,
  required,
  rows = 10,
}: TextArea) => {
  const [message, setMessage] = React.useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.textareaContainer}>
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
          name={name}
          rows={rows}
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

export default textarea;
