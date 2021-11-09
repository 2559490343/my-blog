import React from 'react';
import './index.less';

export default function CommonList(props: any) {
  const { listData, onRowClick } = props;

  return (
    <div className="common-list">
      {listData.map((row: any) => {
        const {
          id,
          title,
          content,
          tags,
          author,
          createDate,
          readCount,
          likeCount,
          commentCount,
          collectionCount,
        } = row;
        const { recommend, original, quote } = tags;
        return (
          <div className="list-item" key={id}>
            <div className="list-title">
              <h4 onClick={() => onRowClick(row)}>{title}</h4>
            </div>
            <div className="list-content">
              <p onClick={() => onRowClick(row)}>{content}</p>
            </div>
            <div className="list-intro">
              <div className="tags">
                {recommend && <span className="recommend">推荐</span>}
                {original && <span className="original">原创</span>}
                {quote && <span className="quote">引用</span>}
              </div>
              <div className="author">
                <span>{author}</span>
                <i className="point"></i>
                <span>{createDate}</span>
              </div>
              <div className="intro-count">
                <span className="readCount">{readCount} 阅读</span>
                <i className="point"></i>
                <span className="likeCount">{likeCount} 点赞</span>
                <i className="point"></i>
                <span className="commentCount">{commentCount} 评论</span>
                <i className="point"></i>
                <span className="collectionCount">{collectionCount} 收藏</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
