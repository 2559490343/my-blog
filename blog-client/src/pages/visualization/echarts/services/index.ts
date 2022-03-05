import { post, put, get, del } from '@/utils/request';

export const getListApi = (data: any) => {
  return post('/books', data);
};

export const addApi = (data: any) => {
  return put('/books', data);
};

export const getApi = (id: number) => {
  return get('/books/' + id);
};

export const deleteApi = (id: number) => {
  return del('/books/' + id);
};
