import { Text } from '@components/core';
import React, { useState } from 'react';

interface FormContainerProps {
  label: string;
  name?: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
}

const FormContainer = ({
  name,
  label,
  children,
  required,
  error,
}: FormContainerProps) => {
  const requiredSign = required ? (
    <abbr
      className="form-container--abbr"
      title={`${name} field is required`}
    >
      *
    </abbr>
  ) : null;

  const messageError = error ? (
    <div className="form-container--message">
      <Text variant="caption">{error}</Text>
    </div>
  ) : null;

  return (
    <div className="form-container">
      <label className="form-container--label">
        {label} {requiredSign}
      </label>
      {children}
      {messageError}
    </div>
  );
};

export default FormContainer;
