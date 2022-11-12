export type ArticleType = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  author: string;
  createDate: string;
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
