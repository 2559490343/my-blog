import Write from '@/components/write';
import { useEffect, useState } from 'react';
import styles from './Blog.less';
import { history } from 'umi';
import Container from '@/components/container';
import { Space, Tag } from 'antd';
import { ArticleType } from './types';
import {
  UserOutlined,
  HistoryOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
} from '@ant-design/icons';

const Blog = () => {
  const [listData, setListData] = useState<Array<ArticleType>>([]);

  const onItemClick = (row: ArticleType) => {
    console.log(row);
    history.push('/blog/blog-detail');
  };
  useEffect(() => {}, []);

  return (
    <div className={styles.root}>
      <div className={styles.list}>
        <Container className={styles.item}>
          <div className={styles.cover}>
            <img
              src="https://img1.baidu.com/it/u=4106831853,1587981098&fm=253&fmt=auto&app=138&f=JPEG?w=550&h=354"
              alt=""
            />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>
              痞子衡嵌入式：聊聊i.MXRT1xxx上的普通GPIO与高速GPIO差异及其用法
            </div>
            <div className={styles.introduction}>
              大家好，我是痞子衡，是正经搞技术的痞子。今天痞子衡给大家介绍的是i.MXRT上的普通GPIO与高速GPIO差异。GPIO
              可以说是
              MCU上最简单最常用的外设模块了，当一些原生功能外设接口模块不能满足项目设计要求时，我们常常会考虑使用GPIO
              来软件模拟实现相应功能，这时候 GPIO 本身性能
            </div>
            <div className={styles.kind}>
              <Space>
                <Tag>前端</Tag>
                <Tag>React</Tag>
              </Space>
            </div>
            <div className={styles.otherInfo}>
              <Space size={16}>
                <div className={styles.author}>
                  <UserOutlined /> 熊熊熊
                </div>
                <div className={styles.createDate}>
                  <HistoryOutlined /> 2022-10-22
                </div>
                <div className={styles.readCount}>
                  <EyeOutlined /> 63
                </div>
                <div className={styles.likeCount}>
                  <HeartOutlined /> 55
                </div>
                <div className={styles.commentCount}>
                  <MessageOutlined /> 8
                </div>
              </Space>
            </div>
          </div>
        </Container>
      </div>
      <Write />
    </div>
  );
};
export default Blog;
