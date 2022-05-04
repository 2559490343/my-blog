import React from 'react';
import styles from './Icon.less';
import svg from '../svgs/test.svg';
const Icon = () => {
  console.log(svg);
  
  return (
    <div className={styles.root}>
      <img src={svg} alt="" />
    </div>
  );
};
export default Icon;
