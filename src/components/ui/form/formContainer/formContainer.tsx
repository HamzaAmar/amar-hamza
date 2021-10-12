import React, { useState, InputHTMLAttributes } from 'react';

import styles from './formContainer.module.css';

interface FormContainerProps {
  label: string;
  name?: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormContainer = ({
  name,
  label,
  children,
  required,
}: FormContainerProps) => {
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
    <div className={styles.formElement}>
      <div className={styles.formElementContainer}>
        <label className={styles.label}>
          {label} {requiredSign}
        </label>
        {children}
      </div>

      {messageError}
    </div>
  );
};

export default FormContainer;
