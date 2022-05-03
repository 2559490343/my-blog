import React, { HTMLAttributes } from 'react';
import styles from './Main.less';
const Main = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children } = props;
  return <main className={styles.root}>{children}</main>;
};
export default Main;
