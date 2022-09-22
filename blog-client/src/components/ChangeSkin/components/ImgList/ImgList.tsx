import { Space } from 'antd';
import React, { HTMLAttributes } from 'react';
import styles from './ImgList.less';

interface ImgListProps extends HTMLAttributes<HTMLDivElement> {
  type: string;
}

const ImgList = (props: ImgListProps) => {
  const { type } = props;
  const imgList = [
    'https://i.postimg.cc/NfqLcsHB/image.png',
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/d5/d5ml6o.jpg',
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/01/01393v.jpg',
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/x8/x82ldl.jpg',
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/g8/g8wmq7.jpg',
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/1k/1kl7vv.jpg',
    'https://dogefs.s3.ladydaily.com/~/source/wallhaven/small/42/42lyg9.jpg',
  ];

  const setBg = (url: string) => {
    localStorage.setItem('bg', url);
    location.reload()
  };

  return (
    <div className={styles.root}>
      <Space wrap size={16}>
        {imgList.map((it, idx) => (
          <div className={styles.item} key={idx} onClick={() => setBg(it)}>
            <img src={it} alt="" />
          </div>
        ))}
      </Space>
    </div>
  );
};
export default ImgList;
