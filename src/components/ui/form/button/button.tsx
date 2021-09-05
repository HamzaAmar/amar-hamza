import React from 'react';
import cn from 'classnames';
import { Loading } from '@components/ui';

import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  status?: IStatus;
}

type IStatus = 'idle' | 'success' | 'error' | 'loading';

const button = ({ children, icon, status = 'idle' }: ButtonProps) => {
  const loading = status === 'loading' ? <Loading /> : icon;
  return (
    <button className={styles.root} type="button">
      <span
        className={cn(styles.iconContainer, {
          [styles.existIconOrLoading]: icon || status === 'loading',
        })}
      >
        {loading}
      </span>
      {children}
    </button>
  );
};

export default button;
