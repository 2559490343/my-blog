import Write from '@/components/write';
import { useEffect, useState } from 'react';
import styles from './Blog.less';
import { history } from 'umi';
import Container from '@/components/container';
import { Button, Input, Space, Tag } from 'antd';
import { ArticleType, TagDataType } from './types';
import {
  UserOutlined,
  HistoryOutlined,
  EyeOutlined,
  HeartOutlined,
  MessageOutlined,
  SearchOutlined,
  TagOutlined,
} from '@ant-design/icons';
import cn from 'classnames';

const Blog = () => {
  const [listData, setListData] = useState<Array<ArticleType>>([]);
  const [tagList, setTagList] = useState<Array<TagDataType>>([]);
  const [selectMap, setSelectMap] = useState<
    Record<string, boolean | undefined>
  >({});

  const onItemClick = (row: ArticleType) => {
    console.log(row);
    history.push('/blog/blog-detail');
  };

  const getData = async () => {
    setListData(Array(20).fill({}));
  };

  const getTagList = async () => {
    setTagList([
      {
        label: '前端',
        count: 46,
      },
      {
        label: 'React',
        count: 18,
      },
      {
        label: '后端',
        count: 34,
      },
      {
        label: 'Java',
        count: 12,
      },
      {
        label: 'Vue',
        count: 23,
      },
      {
        label: 'Nginx',
        count: 6,
      },
      {
        label: 'Javascript',
        count: 19,
      },
      {
        label: '算法',
        count: 33,
      },
      {
        label: 'Nodejs',
        count: 8,
      },
    ]);
  };

  const handleSelectKind = (label: string) => {
    const _selectMap = { ...selectMap };
    if (!_selectMap[label]) {
      _selectMap[label] = true;
    } else {
      _selectMap[label] = false;
    }
    setSelectMap(_selectMap);
  };

  useEffect(() => {
    getData();
    getTagList();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.listBox}>
        <Container className={styles.searchBox}>
          <Input placeholder="请输入关键字进行搜索" />{' '}
          <Button icon={<SearchOutlined />}>搜索</Button>
        </Container>
        <div className={styles.list}>
          {listData.map((item, idx) => (
            <Container className={styles.item} key={idx}>
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
                  <Tag>前端</Tag>
                  <Tag>React</Tag>
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
          ))}
        </div>
      </div>
      <Container className={styles.kindBox}>
        <h3>标签分类</h3>
        <div className={styles.tagBox}>
          <Space wrap>
            {tagList.map((tag, idx) => (
              <Tag
                key={tag.label}
                className={cn({ [styles.active]: selectMap[tag.label] },styles.tag)}
                onClick={() => handleSelectKind(tag.label)}
              >
                <Space size={6}>
                  <TagOutlined />
                  <span>{tag.label}</span>
                  <span>({tag.count})</span>
                </Space>
              </Tag>
            ))}
          </Space>
        </div>
      </Container>
      <Write />
    </div>
  );
};
export default Blog;
