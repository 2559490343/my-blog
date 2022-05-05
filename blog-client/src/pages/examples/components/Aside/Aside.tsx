import React from 'react';
import { history } from 'umi';
import styles from './Aside.less';
import { kindsCategory } from './constant';
import { kindsCategoryType } from './type';
import cn from 'classnames';
import { useLocation } from 'react-router';

const AsideItem: React.FC<kindsCategoryType> = (props) => {
  const { title, list } = props;
  const { pathname } = useLocation();
  const pushRouter = (url: string) => {
    history.push(`/examples/${url}`);
  };
  const getActive = (url: string) => pathname.includes(url);
  return (
    <li className={styles.asideItem}>
      <div className={styles.title}>{title}</div>
      <ul>
        {list.map((item) => (
          <li
            key={item.url}
            className={cn(styles.item, {
              [styles.active]: getActive(item.url),
            })}
            onClick={() => pushRouter(item.url)}
          >
            <span className={styles.en}>{item.en}</span>
            <span className={styles.cn}>{item.cn}</span>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Aside = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.container}>
        {kindsCategory.map((kindItem) => (
          <AsideItem {...kindItem} key={kindItem.title} />
        ))}
      </ul>
    </div>
  );
};
export default Aside;
