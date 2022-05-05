import React, { HTMLAttributes } from 'react';
import styles from './_layout.less';

const Layouts: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children } = props;
  return <div className={styles.root}>{children}</div>;
};

export default Layouts;
