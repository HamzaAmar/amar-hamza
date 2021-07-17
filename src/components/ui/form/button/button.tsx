// import React, {
//   ReactNode,
//   CSSProperties,
//   ButtonHTMLAttributes,
// } from 'react';
// import styles from './button.module.css';
// import cn from 'classnames';
// import { Loading } from '@components/ui';

// type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   children: ReactNode;
//   variant?: Variant;
//   size?: Size;
// };

// type Variant = 'success' | 'warning' | 'danger' | 'info' | 'primary';
// type Status =
//   | 'success'
//   | 'danger'
//   | 'loading'
//   | 'disable'
//   | 'loading'
//   | 'idle';
// type Size = 'small' | 'medium' | 'big' | 'fluid';

// const button = ({
//   children,
//   style,
//   type = 'submit',
//   size = 'medium',
//   variant = 'primary',
//   status = 'idle',

//   onClick,
// }: IProps) => {
//   const buttonClassName = cn(styles.button, {
//     [styles.small]: size === 'small',
//     [styles.medium]: size === 'medium',
//     [styles.big]: size === 'big',
//     [styles.fluid]: size === 'fluid',

//     [styles.success]: variant === 'success',
//     [styles.warning]: variant === 'warning',
//     [styles.danger]: variant === 'danger',
//     [styles.info]: variant === 'info',
//     [styles.primary]: variant === 'primary',

//     [styles.status]: status === 'idle',
//   });
//   return (
//     <button
//       className={cn(buttonClassName)}
//       onClick={onClick}
//       type={type}
//     >
//       <span>
//         <Loading />
//       </span>
//       {children}
//     </button>
//   );
// };

// export default button;

import { Loading } from '@components/ui';
import React from 'react';
import styles from './button.module.css';

interface IButton {
  children: React.ReactNode;
  icon: React.ReactNode;
  status: IStatus;
}

type IStatus = 'idle' | 'success' | 'error' | 'loading';

const button = ({ children, icon, status }: IButton) => {
  return (
    <button className={styles.root}>
      <span className={styles.iconContainer}>
        {status !== 'loading' ? icon : <Loading />}
      </span>
      {children}
    </button>
  );
};

export default button;
