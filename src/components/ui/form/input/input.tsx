// import React, { FC, ReactNode } from 'react';
// import styles from './input.module.css';

// interface Input {
//   placeholder?: string;
//   type?: string;
//   name: string;
//   label: string;
//   leftIcon: ReactNode;
// }

// const input: FC<Input> = ({
//   placeholder,
//   type = 'text',
//   name,
//   label,
//   leftIcon,
// }) => {
//   const [inputValue, setInputValue] = React.useState();
//   const [message, setMessage] = React.useState(null);
//   return (
//     <div className={styles.container}>
//       <label htmlFor={name} className={styles.label}>
//         {label}
//       </label>
//       <div className={styles.inputContainer}>
//         <input
//           id={name}
//           type={type}
//           name={name}
//           value={inputValue}
//           placeholder={placeholder}
//           className={styles.input}
//         />
//         {leftIcon}
//       </div>
//       {message ? (
//         <div>
//           <p>
//             <small>{message}</small>
//           </p>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default input;

import React, { FC, ReactNode } from 'react';
import styles from './input.module.css';

interface Input {
  placeholder?: string;
  type?: string;
  name: string;
  label: string;
  leftIcon?: ReactNode;
}

const input = ({
  name,
  type = 'text',
  placeholder,
  label,
}: Input) => {
  const [inputValue, setInputValue] = React.useState();
  const [message, setMessage] = React.useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label className={styles.label}>{label}</label>
        <input
          id={name}
          type={type}
          name={name}
          value={inputValue}
          placeholder={placeholder}
          className={styles.input}
        />
      </div>

      {message ? (
        <div className={styles.messageContainer}>
          <small className={styles.message}>{message}</small>
        </div>
      ) : null}
    </div>
  );
};

export default input;
