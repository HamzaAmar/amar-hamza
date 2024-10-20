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
  const messageID = `${useId()}-d`;

  const requiredSign = required ? (
    <abbr className="fc-A" title={`${name} field is required`}>
      *
    </abbr>
  ) : null;

  const messageError = error ? (
    <Flex role="alert" items="center" className="fc-M" id={messageID}>
      <Danger width="20" aria-hidden="true" />
      <Text size="5">{error}</Text>
    </Flex>
  ) : null;

  return (
    <div className="fc Sf-3">
      <label className="fc-L Sf-2">
        <Flex items="center" gap="3">
          {label} {requiredSign}
        </Flex>
        {children}
      </label>
      {messageError}
    </div>
  );
};

export default FormContainer;
