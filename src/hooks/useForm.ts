import React, { useState } from 'react';

export function useForm<I>({ initialValues }: { initialValues: I }) {
  const [values, setValues] = useState(initialValues);
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
  };
  const onBlur = () => {};
  const onSubmit = (e: React.FormEvent, fn: Function) => {
    e.preventDefault();
    fn(values);
  };
  return {
    values,
    onChange,
    onBlur,
    onSubmit,
  };
}
