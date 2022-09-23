export type tagsType = {
  recommend: boolean;
  original: boolean;
  quote: boolean;
};

export type ArticleType = {
  id: number;
  title: string;
  content: string;
  tags: tagsType;
  author: string;
  createDate: string;
  readCount: number;
  likeCount: number;
  commentCount: number;
  collectionCount: number;
};

export type TagDataType = {
  label: string;
  count: number;
};

export type SortType = {
  name: string;
  sorter: boolean;
};
