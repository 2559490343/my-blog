import Previewer from '@/components/Previewer';
import {
  ArrowLeftOutlined,
  LikeFilled,
  MailOutlined,
  MessageFilled,
  PlusOutlined,
  StarFilled,
} from '@ant-design/icons';
import { Avatar, Button, Rate, Comment, Tooltip, Space } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import cn from 'classnames';
import styles from './BlogDetail.less';
import { useBoolean } from 'ahooks';
import Container from '@/components/container';
import { history } from 'umi';
import { detailApi } from '../services';
import { ArticleType } from '../types';

const ExampleComment = (props: any) => {
  const { children } = props;

  return (
    <Comment
      actions={[<span key="comment-nested-reply-to">Reply to</span>]}
      author={<a>Han Solo</a>}
      datetime={
        <Tooltip
          title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}
        >
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      }
      avatar={
        <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
      }
      content={
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure).
        </p>
      }
    >
      {children}
    </Comment>
  );
};
const BlogDetail = () => {
  const [hasLike, { set }] = useBoolean(false);
  const [hasCollection, { toggle }] = useBoolean(false);
  const [articalInfo, setArticalInfo] = useState<Partial<ArticleType>>({});

  const handleLike = () => {
    set(!hasLike);
  };
  const handleCollection = () => {
    toggle();
  };
  const handleBack = () => {
    history.goBack();
  };
  const getArticalDetail = async () => {
    const { id } = history.location.query!;
    const res = await detailApi(id as string);
    if (res.success) {
      const data = res.data ?? {};
      setArticalInfo(data);
    }
  };

  useEffect(() => {
    getArticalDetail();
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.leftTools}>
        <ul className={styles.toolBox}>
          <li className={styles.toolItem}>
            <div
              className={cn(styles.toolIcon, { [styles.active]: hasLike })}
              onClick={handleLike}
            >
              <LikeFilled />
            </div>
            <div className={styles.toolText}>赞</div>
          </li>
          <li className={styles.toolItem}>
            <div
              className={cn(styles.toolIcon, {
                [styles.active]: hasCollection,
              })}
              onClick={handleCollection}
            >
              <StarFilled />
            </div>
            <div className={styles.toolText}>收藏</div>
          </li>
          <li className={styles.toolItem}>
            <div className={cn(styles.toolIcon)}>
              <MessageFilled />
            </div>
            <div className={styles.toolText}>评论</div>
          </li>
        </ul>
      </div>
      <div className={styles.inner}>
        <Container className={styles.navigateBar}>
          <Space size={16}>
            <div className={styles.backBtn} onClick={handleBack}>
              <Space>
                <ArrowLeftOutlined />
                <span>返回</span>
              </Space>
            </div>
            <div className={styles.line}></div>
            <div className={styles.title}>文章详情</div>
          </Space>
        </Container>
        <div className={styles.box}>
          <div className={styles.midBox}>
            <Container className={styles.container}>
              <div className={styles.header}>
                <h1 className={styles.title}>{articalInfo.title}</h1>
                <div className={styles.articleInfo}>
                  <span className={styles.infoItem}>
                    推荐指数: <Rate allowHalf defaultValue={2.5} disabled />
                  </span>
                  <span className={styles.infoAuthor}>
                    {articalInfo.createUser}
                  </span>
                  <span>{articalInfo.createTime}</span>
                </div>
              </div>
              <div className={styles.articleContent}>
                <Previewer contentValue={articalInfo.content ?? ''} />
              </div>
            </Container>
            <Container className={styles.commentBox}>
              <div className={styles.inputBox}>
                <div className={styles.inputRow}>
                  <Avatar
                    size={40}
                    style={{ marginRight: 15 }}
                    src="https://joeschmoe.io/api/v1/random"
                  />
                  <TextArea
                    rows={4}
                    placeholder="提问和评论都可以，用心的回复会被更多人看到"
                    maxLength={500}
                  />
                </div>
                <div className={styles.btnRow}>
                  <Button className={styles.btn}>发布评论</Button>
                </div>
              </div>
              <div className={styles.comments}>
                <div className={styles.title}>
                  <p>
                    全部评论 <span>(2)</span>
                  </p>
                </div>
                <div className={styles.commentList}>
                  <ExampleComment>
                    <ExampleComment>
                      <ExampleComment />
                      <ExampleComment />
                    </ExampleComment>
                  </ExampleComment>
                </div>
              </div>
            </Container>
          </div>
          <Container className={styles.rightInfo}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>
                <Avatar size={65} src="https://joeschmoe.io/api/v1/random" />
              </div>
              <div className={styles.userName}>Johngo学长 </div>
            </div>
            <div className={styles.counts}>
              <div className={styles.countItem}>
                <div className={styles.num}>120</div>
                <div className={styles.text}>文章</div>
              </div>
              <div className={styles.countItem}>
                <div className={styles.num}>5</div>
                <div className={styles.text}>粉丝</div>
              </div>
              <div className={styles.countItem}>
                <div className={styles.num}>11</div>
                <div className={styles.text}>收藏</div>
              </div>
              <div className={styles.countItem}>
                <div className={styles.num}>2</div>
                <div className={styles.text}>关注</div>
              </div>
            </div>
            <div className={styles.btns}>
              <Button className={styles.btn}>
                <PlusOutlined />
                关注
              </Button>
              <Button className={styles.btn}>
                <MailOutlined />
                私信
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default BlogDetail;
