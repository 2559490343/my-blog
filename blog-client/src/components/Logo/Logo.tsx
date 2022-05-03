import React from 'react';
import styles from './Logo.less';
const Logo = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logoImg}>
        <span>B</span>
        <span>L</span>
        <span>O</span>
        <span>G</span>
      </div>
      <div className={styles.logoText}>皮皮博客</div>
    </div>
  );
};
export default Logo;
