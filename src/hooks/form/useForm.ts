/* eslint-disable @typescript-eslint/ban-types */
import React, { FormEvent, useState } from 'react';

type ObjectValueToBoolean<T> = {
  [K in keyof T]: boolean;
};

interface ObjectType {
  [key: string]: unknown;
}

function initialValuesToBooleanObj<T extends {}>(values: T) {
  const obj = {} as ObjectValueToBoolean<T>;
  for (const key of Object.keys(values)) {
    obj[key as keyof T] = false;
  }
  return obj;
}

function useForm<T extends {}>({
  initialValues,
}: {
  initialValues: T;
}) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<T>(initialValues);
  const [touched, setTouched] = useState<ObjectValueToBoolean<T>>(
    initialValuesToBooleanObj(initialValues),
  );

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
