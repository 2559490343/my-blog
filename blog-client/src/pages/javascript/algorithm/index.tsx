import CommonList from '@/components/commonList';

export default function Algorithm() {
  const listData = [
    {
      id: 1,
      title: '十大经典排序算法',
      content:
        '市面上的排序算法有很多种，在这里总结归纳出了十个最经典的排序算法，分别是插入排序、希尔排序、冒泡排序...',
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
        title: '二分查找法',
        content:
          '所谓的二分查找，就是在有序的数组中通过每次比较中间值的大小来确定目标值在数组中的位置，每次都能排出一半的元素，所以成为二分查...',
        tags: {
          recommend: true,
          original: true,
          quote: false,
        },
        author: '熊熊熊',
        createDate: '2021-11-11',
        readCount: 15,
        likeCount: 5,
        commentCount: 4,
        collectionCount: 6,
      },
      {
        id: 3,
        title: '回溯算法',
        content:
          '我理解的回溯算法，其实就是一种暴力的for循环，只是这种循环是可以通过代码实现的，比如要实现k层的for循环，k是一个未知数，那么代码其实是写不出来的，因为k未知，就不知道要写多少个for循环，但是可以通过回溯，当然这么一说，回溯又有点像递归了...',
        tags: {
          recommend: true,
          original: true,
          quote: false,
        },
        author: '熊熊熊',
        createDate: '2021-11-20',
        readCount: 30,
        likeCount: 25,
        commentCount: 4,
        collectionCount: 6,
      },
  ];
  return (
    <div>
      <CommonList listData={listData} />
    </div>
  );
}
