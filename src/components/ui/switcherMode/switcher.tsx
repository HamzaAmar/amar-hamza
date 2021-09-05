import { Moon, Sun } from '@components/icons';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import styles from './switcher.module.css';

const Switcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const icon =
    resolvedTheme === 'dark' ? (
      <Sun width="30" aria-hidden="true" focusable="false" />
    ) : (
      <Moon width="30" aria-hidden="true" focusable="false" />
    );

  return (
    <button
      className={styles.button}
      onClick={() =>
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }
      type="button"
      aria-label={`Switch Mode ${resolvedTheme}`}
    >
      {icon}
    </button>
  );
};

export default Switcher;
