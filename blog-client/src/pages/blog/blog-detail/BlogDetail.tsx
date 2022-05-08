import Previewer from '@/components/Previewer';
import { Rate } from 'antd';
import React from 'react';
import styles from './BlogDetail.less';
const BlogDetail = () => {
  return (
    <div className={styles.root}>
      <div className={styles.leftTools}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>【完虐算法】字符串 - 滑动窗口专题 </h1>
          <div className={styles.articleInfo}>
            推荐指数: <Rate allowHalf defaultValue={2.5} disabled />
            Johngo学长2021-11-05 17:18:26
          </div>
        </div>
        <div className={styles.articleContent}>
          <Previewer contentValue="" />
        </div>
      </div>
      <div className={styles.rightInfo}></div>
    </div>
  );
};
export default BlogDetail;
