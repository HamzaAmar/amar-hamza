import React, {
  InputHTMLAttributes,
  ReactNode,
  useState,
} from 'react';

import { FormContainer } from '..';

import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = (props: InputProps) => {
  const {
    name,
    label,
    required,
    type = 'text',
    placeholder,
    onChange,
  } = props;
  return (
    <FormContainer name={name} label={label} required={required}>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        required
      />
    </FormContainer>
  );
};

export default Input;
