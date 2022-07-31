import React, { useState } from 'react';
import {
  Success,
  Notification,
  Warning,
  Danger,
  Close,
} from '@components/icons';

import { Button, Text } from '..';

import { AlertProps } from './alert.type';

// const Icon = {
//   success: <Success width="25" height="25" />,
//   notification: <Notification width="25" height="25" />,
//   warning: <Warning width="25" height="25" />,
//   danger: <Danger width="25" height="25" />,
// };

const Alert = ({ variant, message }: AlertProps) => {
  // const Icon: ReactNode = variant[0].toUpperCase() + variant.slice(1);
  const [open, setOpen] = useState(true);

  return (
    <div
      data-close={open === false}
      className={`alert alert__${variant}`}
    >
      <Text>
        <strong>{variant}</strong> {message}
      </Text>
      <Button onClick={() => setOpen(false)} type="button">
        <Close fill="white" width="10" height="10" />
      </Button>
    </div>
  );
};

export default Alert;
