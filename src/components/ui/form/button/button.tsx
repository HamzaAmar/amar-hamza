import { Loading } from '@components/ui';
import React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

interface IButton {
  children: React.ReactNode;
  icon?: React.ReactNode;
  status?: IStatus;
}

type IStatus = 'idle' | 'success' | 'error' | 'loading';

const button = ({ children, icon, status = 'idle' }: IButton) => {
  return (
    <button className={styles.root}>
      <span
        className={cn(styles.iconContainer, {
          [styles.existIconOrLoading]: icon || status === 'loading',
        })}
      >
        {status !== 'loading' ? icon : <Loading />}
      </span>
      {children}
    </button>
  );
};

export default button;
