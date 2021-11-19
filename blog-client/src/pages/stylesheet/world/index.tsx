import React, { useState, useEffect } from 'react';
import CommonList from '@/components/commonList';
import './index.less';

export default function World() {
  const [listData, setListData] = useState([]);
  const onRowClick = (row) => {};
  useEffect(() => {
    React.loading();
    setTimeout(() => {
      setListData([
        {
          id: 1,
          title:
            '痞子衡嵌入式：聊聊i.MXRT1xxx上的普通GPIO与高速GPIO差异及其用法',
          content:
            '大家好，我是痞子衡，是正经搞技术的痞子。今天痞子衡给大家介绍的是i.MXRT上的普通GPIO与高速GPIO差异。GPIO 可以说是 MCU上最简单最常用的外设模块了，当一些原生功能外设接口模块不能满足项目设计要求时，我们常常会考虑使用GPIO 来软件模拟实现相应功能，这时候 GPIO 本身性能',
          tags: {
            recommend: true,
            original: true,
            quote: false,
          },
          author: '熊熊熊',
          createDate: '2021-11-9',
          readCount: 10,
          likeCount: 12,
          commentCount: 2,
          collectionCount: 1,
        },
        {
          id: 2,
          title:
            '痞子衡嵌入式：聊聊i.MXRT1xxx上的普通GPIO与高速GPIO差异及其用法',
          content:
            '大家好，我是痞子衡，是正经搞技术的痞子。今天痞子衡给大家介绍的是i.MXRT上的普通GPIO与高速GPIO差异。GPIO 可以说是 MCU上最简单最常用的外设模块了，当一些原生功能外设接口模块不能满足项目设计要求时，我们常常会考虑使用GPIO 来软件模拟实现相应功能，这时候 GPIO 本身性能',
          tags: {
            recommend: true,
            original: true,
            quote: false,
          },
          author: '熊熊熊',
          createDate: '2021-11-9',
          readCount: 10,
          likeCount: 12,
          commentCount: 2,
          collectionCount: 1,
        },
        {
          id: 3,
          title:
            '痞子衡嵌入式：聊聊i.MXRT1xxx上的普通GPIO与高速GPIO差异及其用法',
          content:
            '大家好，我是痞子衡，是正经搞技术的痞子。今天痞子衡给大家介绍的是i.MXRT上的普通GPIO与高速GPIO差异。GPIO 可以说是 MCU上最简单最常用的外设模块了，当一些原生功能外设接口模块不能满足项目设计要求时，我们常常会考虑使用GPIO 来软件模拟实现相应功能，这时候 GPIO 本身性能',
          tags: {
            recommend: true,
            original: true,
            quote: false,
          },
          author: '熊熊熊',
          createDate: '2021-11-9',
          readCount: 10,
          likeCount: 12,
          commentCount: 2,
          collectionCount: 1,
        },
      ]);
      React.close()
    }, 2000);
  }, []);
  return (
    <div className="stylesheet-world">
      <CommonList listData={listData} onRowClick={onRowClick} />
    </div>
  );
}
