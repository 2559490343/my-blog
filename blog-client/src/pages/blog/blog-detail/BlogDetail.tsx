import Previewer from '@/components/Previewer';
import {
  LikeFilled,
  MailOutlined,
  MessageFilled,
  PlusOutlined,
  ShareAltOutlined,
  StarFilled,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Rate, Comment } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import styles from './BlogDetail.less';

const BlogDetail = () => {
  const ExampleComment = (props: any) => {
    const { children } = props;
    return (
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a>Han Solo</a>}
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

  return (
    <div className={styles.root}>
      <div className={styles.leftTools}>
        <ul className={styles.toolBox}>
          <li className={styles.toolItem}>
            <div className={styles.toolIcon}>
              <UnorderedListOutlined />
            </div>
            <div className={styles.toolText}>目录</div>
          </li>
          <li className={styles.toolItem}>
            <div className={styles.toolIcon}>
              <LikeFilled />
            </div>
            <div className={styles.toolText}>赞</div>
          </li>
          <li className={styles.toolItem}>
            <div className={styles.toolIcon}>
              <StarFilled />
            </div>
            <div className={styles.toolText}>收藏</div>
          </li>
          <li className={styles.toolItem}>
            <div className={styles.toolIcon}>
              <MessageFilled />
            </div>
            <div className={styles.toolText}>评论</div>
          </li>
          <li className={styles.toolItem}>
            <div className={styles.toolIcon}>
              <ShareAltOutlined />
            </div>
            <div className={styles.toolText}>分享</div>
          </li>
        </ul>
      </div>
      <div className={styles.midBox}>
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
        <div className={styles.commentBox}>
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
              <p>全部评论 <span>(2)</span></p>
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
        </div>
      </div>
      <div className={styles.rightInfo}>
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
      </div>
    </div>
  );
};
export default BlogDetail;
