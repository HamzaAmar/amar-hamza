'use client';

import { Flex, Text } from '@components/core';
import { Danger } from '@components/icons';
import React, { useId } from 'react';

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
  const messageID = `${useId()}-description`;

  const requiredSign = required ? (
    <abbr
      className="form-container--abbr"
      title={`${name} field is required`}
    >
      *
    </abbr>
  ) : null;

  const messageError = error ? (
    <Flex
      role="alert"
      items="center"
      className="form-container--message"
      id={messageID}
    >
      <Danger width="20" aria-hidden="true" />
      <Text size="sm">{error}</Text>
    </Flex>
  ) : null;

  return (
    <div className="form-container l_flow__xs">
      <label className="form-container--label l_flow__2xs">
        <Flex items="center" gap="xs">
          {label} {requiredSign}
        </Flex>
        {children}
      </label>
      {messageError}
    </div>
  );
};

export default FormContainer;
