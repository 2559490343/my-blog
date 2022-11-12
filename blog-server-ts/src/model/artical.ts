export default class Artical {
  id!: number;
  title!: string;
  content?: string;
  tags?: string;
  author?: string;
  readCount?: number;
  likeCount?: number;
  commentCount?: number;
  createTime?: number;
  updateTime?: number;
}
