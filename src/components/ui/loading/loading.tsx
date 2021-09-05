import React from 'react';

import styles from './loading.module.css';

const loading = () => {
  return (
    <div
      className={styles.container}
      //   style={{ width: '50px', height: '50px' }}
    >
      <div className={`${styles.dot} ${styles.firstDot}`} />
      <div className={`${styles.dot} ${styles.secondDot}`} />
      <div className={`${styles.dot} ${styles.thirdDot}`} />
    </div>
  );
};

export default loading;
