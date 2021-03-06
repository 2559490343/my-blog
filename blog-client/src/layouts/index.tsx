import Header from './components/header';
import Main from './components/main';
import styles from './index.less';
import React, { HTMLAttributes } from 'react';

const Layouts: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className={styles.root}>
      <Header />
      <section className={styles.section}>
        <Main>{props.children}</Main>
      </section>
    </div>
  );
};
export default Layouts;
