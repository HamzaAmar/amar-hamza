import React, { useState, ReactNode } from 'react';
import cn from 'classnames';
import {
  Success,
  Notification,
  Warning,
  Danger,
  Close,
} from '@components/icons';

import styles from './alert.module.css';

interface AlertProps {
  variant: 'success' | 'warning' | 'danger' | 'info';
  message: string;
}

const Icon = {
  success: <Success width="25" height="25" />,
  notification: <Notification width="25" height="25" />,
  warning: <Warning width="25" height="25" />,
  danger: <Danger width="25" height="25" />,
};
const Alert = ({ variant, message }: AlertProps) => {
  const Icon: ReactNode = variant[0].toUpperCase() + variant.slice(1);
  const [open, setOpen] = useState(true);

  const rootClassName = cn(styles.root, {
    [styles.success]: variant === 'success',
    [styles.warning]: variant === 'warning',
    [styles.danger]: variant === 'danger',
    [styles.info]: variant === 'info',
    [styles.close]: open === false,
  });
  return (
    <div className={rootClassName}>
      {/* <div className={styles.rightIconContainer}>{Icon[variant]}</div> */}
      <div className={styles.textContainer}>
        <p className={styles.text}>
          <strong>{variant}</strong> {message}
        </p>
      </div>
      <button
        className={styles.closeIconContainer}
        onClick={() => setOpen(false)}
        type="button"
      >
        <Close fill="white" width="10" height="10" />
      </button>
    </div>
  );
};

export default Alert;
