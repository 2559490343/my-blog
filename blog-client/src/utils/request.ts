import { loading, close } from './index.js';
import { message } from 'antd';

let controller = new AbortController();
let signal = controller.signal;
export const request = async (
  method: string,
  url: string,
  params = {},
  options: any,
) => {
  options = options || { headers: {}, dataType: 'json' };
  loading();
  return new Promise((resolve, reject) => {
    fetch(url, {
      method, //GET, POST, PUT, DELETE
      body: method === 'POST' ? JSON.stringify(params) : null,
      mode: 'cors', // no-cors, cors, *same-origin
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        ...options.headers,
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
        const { ok, headers } = response;
        if (ok) {
          const { dataType } = options;
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
          close();
          message.error('网络错误!');
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
        close();
        if (data.code !== 200) {
          message.error(data.msg);
          return reject();
        }
        resolve({
          data,
          ok,
          headers,
        });
      })
      .catch((err) => {
        console.log('requestError---', err);
        message.error('服务器错误!');
        close();
        reject(null);
      });
  });
};

export const get = (url: string, options?: any) => {
  return request('GET', url, {}, options);
};

export const post = (url: string, params: any, options: any) => {
  return request('POST', url, params, options);
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
