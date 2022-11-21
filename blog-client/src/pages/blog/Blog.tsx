import Write from '@/components/write';
import { useEffect, useState } from 'react';
import styles from './Blog.less';
import { history } from 'umi';
import Container from '@/components/container';
import { Button, Input, Space, Spin, Tag } from 'antd';
import { ArticleType, SortType, TagDataType } from './types';
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
import SortItem from './components/SortItem';
import { sorters } from './constant';
import { useUpdateEffect } from 'ahooks';
import { getListApi } from './services';

const Blog = () => {
  const [listData, setListData] = useState<Array<ArticleType>>([]);
  const [tagList, setTagList] = useState<Array<TagDataType>>([]);
  const [selectMap, setSelectMap] = useState<
    Record<string, boolean | undefined>
  >({});
  const [currentSort, setCurrentSort] = useState<SortType | undefined>();
  const [searchVal, setSearchVal] = useState('');
  const [loading, setLoading] = useState(false);

  const onItemClick = (row: ArticleType) => {
    history.push(`/blog/blog-detail?id=${row.id}`);
  };
  const getData = async () => {
    setLoading(true);
    const res = await getListApi({});
    setLoading(false);
    if (res.success) {
      const list = res.data.list ?? [];
      setListData(list);
    }
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
      {
        label: 'GO',
        count: 1,
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
  const onSortChange = (name: string, sorter: boolean) => {
    setCurrentSort({
      name,
      sorter,
    });
  };
  const handleSearch = () => {
    getData();
  };
  const handleReset = () => {
    setCurrentSort(undefined);
    setSearchVal('');
    setSelectMap({});
  };

  useEffect(() => {
    getData();
    getTagList();
  }, []);
  useUpdateEffect(() => {
    console.log(currentSort);
  }, [currentSort]);

  return (
    <div className={styles.root}>
      <div className={styles.listBox}>
        <Container className={styles.searchBox}>
          <div className={styles.inputBox}>
            <Input
              placeholder="请输入关键字进行搜索"
              style={{ marginRight: 8 }}
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
            <Button icon={<SearchOutlined />} onClick={handleSearch}>
              搜索
            </Button>
          </div>
          <div className={styles.extraSearch}>
            <Space size={16}>
              {sorters.map((sort) => (
                <SortItem
                  label={sort.label}
                  name={sort.name}
                  onChange={onSortChange}
                  active={currentSort?.name === sort.name}
                  key={sort.name}
                />
              ))}
              <Button type="dashed" onClick={handleReset}>
                重置
              </Button>
            </Space>
          </div>
        </Container>
        <div className={styles.list}>
          <Spin spinning={loading} style={{ minHeight: 300 }}>
            {listData.map((item, idx) => (
              <Container className={styles.item} key={idx}>
                <div className={styles.cover} onClick={() => onItemClick(item)}>
                  <img
                    src="https://img1.baidu.com/it/u=4106831853,1587981098&fm=253&fmt=auto&app=138&f=JPEG?w=550&h=354"
                    alt=""
                  />
                </div>
                <div className={styles.info}>
                  <div
                    className={styles.title}
                    onClick={() => onItemClick(item)}
                  >
                    {item.title}
                  </div>
                  <div className={styles.introduction}>{item.abstract}</div>
                  <div className={styles.kind}>
                    {item.tags?.split(',').map((tagName) => (
                      <Tag
                        onClick={() => handleSelectKind(tagName)}
                        key={tagName}
                      >
                        {tagName}
                      </Tag>
                    )) ?? '—'}
                  </div>
                  <div className={styles.otherInfo}>
                    <Space size={16}>
                      <div className={styles.author}>
                        <UserOutlined /> {item.createUser}
                      </div>
                      <div className={styles.createDate}>
                        <HistoryOutlined /> {item.createTime}
                      </div>
                      {/* <div className={styles.readCount}>
                        <EyeOutlined /> 63
                      </div>
                      <div className={styles.likeCount}>
                        <HeartOutlined /> 55
                      </div>
                      <div className={styles.commentCount}>
                        <MessageOutlined /> 8
                      </div> */}
                    </Space>
                  </div>
                </div>
              </Container>
            ))}
          </Spin>
        </div>
      </div>
      <Container className={styles.kindBox}>
        <h3>标签分类</h3>
        <div className={styles.tagBox}>
          <Space wrap>
            {tagList.map((tag, idx) => (
              <Tag
                key={tag.label}
                className={cn(
                  { [styles.active]: selectMap[tag.label] },
                  styles.tag,
                )}
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
      <Write freshList={handleSearch} />
    </div>
  );
};
export default Blog;
