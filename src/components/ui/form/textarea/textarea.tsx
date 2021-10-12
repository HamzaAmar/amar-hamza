import React, {
  TextareaHTMLAttributes,
  ReactNode,
  useState,
} from 'react';

import { FormContainer } from '..';

import styles from './textarea.module.css';

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = (props: TextAreaProps) => {
  const { name, placeholder, label, onChange, required } = props;
  return (
    <FormContainer name={name} label={label} required={required}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.textarea}
        onChange={onChange}
        required
        rows={5}
      />
    </FormContainer>
  );
};

export default TextArea;
