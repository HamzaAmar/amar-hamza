import { useTheme } from 'next-themes';
import React from 'react';
import styles from './switcher.module.css';

const switcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <label
      className={styles.parent}
      htmlFor="toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <input id="toggle" className={styles.toggle} type="checkbox" />
    </label>
  );
};

export default switcher;
