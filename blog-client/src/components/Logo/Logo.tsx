import React from 'react';
import { history } from 'umi';
import styles from './Logo.less';
const Logo = () => {
  const toHome = () => {
    history.push('/blog');
  };
  return (
    <div className={styles.root} onClick={toHome}>
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
