'use client';

import React from 'react';
import {
  Success,
  Notification,
  Warning,
  Danger,
  Close,
} from '@components/icons';
import { Text, IconButton } from '@components/core';
import useBoolean from '@hooks/useBoolean';

import { AlertProps } from './alert.type';

const icon = {
  success: <Success width="24" height="24" />,
  pri: <Notification width="24" height="24" />,
  warning: <Warning width="24" height="24" />,
  danger: <Danger width="24" height="24" />,
};

export const Alert = ({ color = 'd', message }: AlertProps) => {
  const Status = color[0].toUpperCase() + color.slice(1);
  const { state: open, handleFalse } = useBoolean(true);

  return (
    <div
      data-close={open === false}
      className={`a-l u_${color}`}
      role="alert"
    >
      <div className="a-l-hdr">
        <Text size="md" color={color} contrast="low" weight="bold">
          {Status}
        </Text>
        <IconButton
          color={color!}
          onClick={handleFalse}
          title="close Alert"
          type="button"
          icon={<Close width="16" />}
        />
      </div>
      <hr />
      <Text size="sm" color={color} contrast="low">
        {message}
      </Text>
    </div>
  );
};
