type tagsType = { recommend: boolean; original: boolean; quote: boolean };
export interface BlogProps {
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
}
