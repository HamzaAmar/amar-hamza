import React, { FormEvent, useState } from 'react';

function initialValuesToBooleanObj<T>(values: T) {
  const obj: T = {};
  for (const key of Object.keys(values)) {
    obj[key] = false;
  }
  return obj;
}

function useForm<T>({ initialValues }: { initialValues: T }) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<T>(initialValues);
  const [touched, setTouched] = useState<T>(initialValues);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, validationMessage, type } = event.target;
    if (event.target.checkValidity()) {
      setErrors({ ...errors, [name]: '' });
    } else {
      if (validationMessage === 'typeMismatch' && type === 'email') {
        event.target.setCustomValidity(
          'Please enter a valid email address.',
        );
        setErrors({ ...errors, [name]: validationMessage });
      }
      setErrors({ ...errors, [name]: validationMessage });
    }
    setValues((values) => ({ ...values, [name]: value }));
  };

  const onBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, validationMessage } = event.target;
    setErrors({ ...errors, [name]: validationMessage });
    setTouched({ ...touched, [name]: true });
  };
  const resetForm = () => {
    setValues(initialValues);
  };
  const onSubmit = (
    event: FormEvent,
    callback: (...params: any) => void,
  ) => {
    event.preventDefault();
    callback();
  };

  return {
    values,
    errors,
    touched,
    onChange,
    onBlur,
    resetForm,
    onSubmit,
  };
}

export default useForm;
