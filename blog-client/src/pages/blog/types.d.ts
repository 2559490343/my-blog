export type ArticleType = {
  id: number;
  title: string;
  content: string;
  abstract: string;
  tags: string;
  author: string;
  createTime: string;
  createUser: string;
  readCount: number;
  likeCount: number;
  commentCount: number;
};

export type TagDataType = {
  label: string;
  count: number;
};

export type SortType = {
  name: string;
  sorter: boolean;
};
