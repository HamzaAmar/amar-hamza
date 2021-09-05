import React, { TextareaHTMLAttributes } from 'react';

import styles from './textarea.module.css';

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea = ({
  name,
  placeholder,
  label,
  onChange,
  required,
  rows = 10,
}: TextAreaProps) => {
  const [message, setMessage] = React.useState<string | null>(null);
  const messageError = message ? (
    <div className={styles.messageContainer}>
      <small className={styles.message}>{message}</small>
    </div>
  ) : null;
  const requiredLabel = required ? (
    <abbr className={styles.abbr} title={`${name} field is required`}>
      *
    </abbr>
  ) : null;
  return (
    <div className={styles.container}>
      <div className={styles.textareaContainer}>
        <label className={styles.label}>
          {label}
          {requiredLabel}
        </label>
        <textarea
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          rows={rows}
        >
          {}
        </textarea>
      </div>

      {messageError}
    </div>
  );
};

export default Textarea;
