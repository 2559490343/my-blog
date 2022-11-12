import { message } from 'antd';
import { RequestOptionsProps, ResultProps } from './types';
import qs from 'querystring';

let controller = new AbortController();
let signal = controller.signal;
const prefixUrl = '/api';
const parseRequest = (url: string, method: string, params: any) => {
  let body = null,
    _url = prefixUrl + url;
  switch (method) {
    case 'GET':
    case 'DELETE':
      _url = `${_url}?${qs.stringify(params)}`;
      return [_url, body];
    case 'POST':
    case 'PUT':
      body = JSON.stringify(params);
      return [_url, body];
    default:
      return [_url, null];
  }
};

export const request = async <T = any>(
  method: string,
  url: string,
  params: any = {},
  options?: RequestOptionsProps,
) => {
  options = options || { headers: {}, dataType: 'json' };
  const [requestUrl, requestBody] = parseRequest(url, method, params);

  return new Promise<ResultProps<T>>((resolve, reject) => {
    fetch(requestUrl || '', {
      method, //GET, POST, PUT, DELETE
      body: requestBody,
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        ...options?.headers,
      },
      signal,
      // referrer: "about:client",
      // referrerPolicy: "no-referrer-when-downgrade",
      // credentials: "same-origin",
      // cache: "default",
      // redirect: "follow",
      // integrity: "",
      // keepalive: false,
      // signal: undefined
    })
      .then((response) => {
        console.log(response);
        const { ok, headers } = response;
        if (ok) {
          let dataType = options?.dataType;
          let data = null;
          switch (dataType) {
            case 'json':
              data = response.json();
              break;
            case 'text':
              data = response.text();
              break;
            case 'blob':
              data = response.blob();
              break;
            case 'arrayBuffer':
              data = response.arrayBuffer();
              break;
            default:
              data = response.json();
              break;
          }
          return {
            headers,
            body: data,
            ok,
          };
        } else {
          return reject();
        }
      })
      .then(async (res) => {
        const { ok, headers, body } = res || {
          ok: false,
          headers: {},
          body: null,
        };
        const data = await body;
        if (options?.dataType === 'json') {
          if (data.code !== 200) {
            message.error(data.msg);
            return reject();
          }
        }
        if (ok) {
          resolve(data);
        } else {
          reject();
        }
      })
      .catch((err) => {
        console.log('requestError---', err);
        message.error('服务器错误!');
        reject(err);
      });
  });
};

export const get = <T = any>(
  url: string,
  data?: any,
  options?: RequestOptionsProps,
) => {
  return request<T>('GET', url, data || {}, options);
};
export const del = <T = any>(
  url: string,
  data?: any,
  options?: RequestOptionsProps,
) => {
  return request<T>('DELETE', url, data || {}, options);
};
export const post = <T = any>(
  url: string,
  params: any,
  options?: RequestOptionsProps,
) => {
  return request<T>('POST', url, params || {}, options);
};
export const put = <T = any>(
  url: string,
  params: any,
  options?: RequestOptionsProps,
) => {
  return request<T>('PUT', url, params || {}, options);
};

/**
  get('/api/v1/random', {
      dataType: 'blob',
    }).then((res) => {
      const { data, headers, ok } = res;
      console.log(ok);
      const contentType = headers.get('Content-Type');
      let blob = new Blob([data], { type: contentType || undefined }); // data为二进制数据
      let URL = window.URL.createObjectURL(blob);
      setUrl(URL)
      let a = document.createElement('a');
      a.href = URL;
      a.download = '下载的文件.txt'; // 写入文件名
      document.body.append(a);
    });
 */
