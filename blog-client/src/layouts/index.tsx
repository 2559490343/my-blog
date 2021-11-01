import Header from './components/header';
import Aside from './components/aside';
import Main from './components/main';
import styles from './index.less';

export default function Layouts(props: any) {
  return (
    <div className={styles.layouts}>
      <Header />
      <section>
        <Aside />
        <Main>{props.children}</Main>
        {/* <Main /> */}
      </section>
    </div>
  );
}
