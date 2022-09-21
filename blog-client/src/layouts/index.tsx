import Header from './components/header';
import Main from './components/main';
import styles from './index.less';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { useLocation } from 'umi';
import Loading from '@/components/Loading';

const Layouts: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const [showLoading, setShowLoading] = useState(false);

  const changeLoading = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 500);
  };

  // 存储路由地址map
  const pathMap = useRef<Record<string, boolean>>({});
  useEffect(() => {
    // 记录是否打开过这个路由，模拟第一次加载的情况
    if (!pathMap.current[pathname]) {
      pathMap.current[pathname] = true;
      changeLoading();
    }
  }, [pathname]);

  return (
    <div className={styles.root}>
      {showLoading && <Loading />}
      <div className={styles.animateBg}></div>
      <Header />
      <section className={styles.section}>
        <Main>{props.children}</Main>
      </section>
    </div>
  );
};
export default Layouts;
