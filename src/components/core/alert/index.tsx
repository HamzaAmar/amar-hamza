'use client';

import React from 'react';
import {
  Success,
  Notification,
  Warning,
  Danger,
  Close,
  Info,
  Check,
} from '@components/icons';
import { Text } from '@components/core';

import type { AlertProps } from './alert.type';

const icon = {
  s: <Check width="16" />,
  p: <Info width="16" />,
  w: <Warning width="16" />,
  d: <Danger width="16" />,
  b: <Danger width="16" />,
} as const;

export const Alert = ({
  color = 'd',
  message,
  title,
}: AlertProps) => {
  return (
    <div className={`a-l l_f_2xs u_${color}`} role="alert">
      <div>
        <span className="a-l-icn">{icon[color]}</span>
        <Text
          transform="capitalize"
          className="a-l-tl"
          size="md"
          color={color}
          contrast="low"
          weight="medium"
        >
          {title}
        </Text>
      </div>
      <Text size="sm" weight="normal" color={color} contrast="low">
        {message}
      </Text>
    </div>
  );
};
