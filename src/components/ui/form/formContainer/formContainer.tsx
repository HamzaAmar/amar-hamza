import React, { FC, ReactNode } from 'react';
import styles from './formContainer.module.css';

interface Input {
  children: ReactNode;
  name: string;
  label: string;
  message: string | null;
}

const input: FC<Input> = ({ children, name, label, message }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputContainer}>{children}</div>
      {message ? (
        <div>
          <p>
            <small>{message}</small>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default input;
