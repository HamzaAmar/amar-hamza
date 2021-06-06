import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import styles from './switcher.module.css';

const switcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  console.log(resolvedTheme);

  return (
    <label className={styles.parent} htmlFor="toggle">
      <input
        id="toggle"
        className={styles.toggle}
        type="checkbox"
        onClick={() =>
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }
      />
    </label>
  );
};

export default switcher;
