import { Flex, Text } from '@components/core';
import { Danger } from '@components/icons';
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
    <Flex items="center" className="form-container--message">
      <Danger width="20" aria-hidden="true" />
      <Text size="sm">{error}</Text>
    </Flex>
  ) : null;

  return (
    <div className="form-container">
      <label className="form-container--label">
        <Flex items="center" gap="2xs">
          {label} {requiredSign}
        </Flex>
        {children}
      </label>
      {messageError}
    </div>
  );
};

export default FormContainer;
