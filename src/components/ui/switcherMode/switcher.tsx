import { Moon, Sun } from '@components/icons';
import { NONAME } from 'dns';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import styles from './switcher.module.css';

const switcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className={styles.button}
      onClick={() =>
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }
      aria-label={`Switch Mode ${resolvedTheme}`}
    >
      {resolvedTheme !== 'dark' ? (
        <Sun width="30" aria-hidden="true" focusable="false" />
      ) : (
        <Moon width="30" aria-hidden="true" focusable="false" />
      )}
    </button>
  );
};

export default switcher;
