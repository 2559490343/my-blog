export default class Artical {
  id!: number;
  title!: string;
  abstract?: string;
  content?: string;
  tags?: string;
  author?: string;
  readCount?: number;
  likeCount?: number;
  commentCount?: number;
  updateUser?: string;
  updateTime?: string;
  createUser?: string;
  createTime?: string;
}
