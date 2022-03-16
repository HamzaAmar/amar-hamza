import React, { ReactElement, TextareaHTMLAttributes } from 'react';
import { FormContainer } from '@components/ui';

import styles from './textarea.module.css';

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon: ReactElement;
}

const TextArea = (props: TextAreaProps) => {
  const { name, placeholder, label, onChange, required, icon } =
    props;
  return (
    <FormContainer name={name} label={label} required={required}>
      <div className={styles.textareaContainer}>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className={styles.textarea}
          onChange={onChange}
          required
          rows={5}
        />
        <div className={styles.iconContainer}>{icon}</div>
        <div className={styles.line} />
      </div>
    </FormContainer>
  );
};

export default TextArea;
