import useMode from '@hooks/darkMode';
import React from 'react';
import styles from './switcher.module.css';

const switcher = () => {
  const [mode, setColorMode] = useMode();
  return (
    <label
      className={styles.parent}
      htmlFor="toggle"
      onClick={setColorMode}
    >
      <input id="toggle" className={styles.toggle} type="checkbox" />
    </label>
  );
};

export default switcher;
