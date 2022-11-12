import { post, put, del, get } from '@/utils/request';
import { ListResType, ObjType } from '@/utils/types';
import { ArticleType } from '../types';

export const getListApi = (params: ObjType) =>
  post<ListResType<ArticleType>>('/articals/page', params);

export const addApi = (params: ObjType) => post('/articals', params);
export const editApi = (params: ObjType) => put('/articals', params);
export const deleteApi = (id: number) => del(`/articals/${id}`);
export const detailApi = (id: number) => get(`/articals/${id}`);
