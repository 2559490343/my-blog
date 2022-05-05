import React, { HTMLAttributes } from 'react';
import Aside from './components/Aside';
import styles from './_layout.less';

const Layouts: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children } = props;
  return (
    <div className={styles.root}>
      <Aside />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layouts;
