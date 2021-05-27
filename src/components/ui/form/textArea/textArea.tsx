import React, { FC } from 'react';
import { FormContainer } from '../formContainer';
import styles from './textArea.module.css';

interface Input {
  placeholder?: string;
  type?: string;
  name: string;
  label: string;
}

const textArea: FC<Input> = ({
  placeholder,
  type = 'text',
  name,
  label,
}) => {
  const [inputValue, setInputValue] = React.useState();
  const [message, setMessage] = React.useState(null);
  return (
    <FormContainer name={name} label={label} message={message}>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={styles.textArea}
      >
        {inputValue}
      </textarea>
    </FormContainer>
  );
};

export default textArea;
