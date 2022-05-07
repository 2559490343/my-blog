import ReactDOM from 'react-dom';
import Loading from '@/components/Loading';
// @ts-ignore
import icons from '@/utils/getAllIcons';

/**
 * 封装一个有过期时间的localstorage存储
 * @param {string} key 存储key值
 * @param {any} value 存储的value值
 * @param {number} timeout 过期时间(h)
 */
export const setStorage = (key: string, value: any, timeout: number = 1) => {
  // 默认过期时间为1小时
  const outTime = timeout * 60 * 60 * 1000;
  if (localStorage.getItem(key)) {
    const obj = getStorage(key);
    obj.outDate = Date.now() + outTime;
    localStorage.setItem(key, JSON.stringify(obj));
  } else {
    const obj = {
      value,
      outDate: Date.now() + outTime,
    };
    localStorage.setItem(key, JSON.stringify(obj));
  }
};

export const getStorage = (key: string) => {
  const obj = JSON.parse(
    localStorage.getItem(key) || '{ "value": null, "outDate": 0 }',
  );
  if (Date.now() > obj.outDate) return { value: null, outDate: 0 };
  return {
    value: obj.value,
    outDate: obj.outDate,
  };
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

/**
 * 封装通用的全局loading组件，调用此方法打开loading效果
 */
export const showLoading = () => {
  const dom = document.createElement('div');
  dom.setAttribute('id', 'pp-loading');
  const style = dom.style;
  style.position = 'absolute';
  style.top = '0px';
  style.bottom = '0px';
  style.left = '0px';
  style.right = '0px';
  style.zIndex = '10000';
  style.backgroundColor = 'rgba(0,0,0,0.7)';
  document.body.appendChild(dom);
  ReactDOM.render(<Loading />, dom);
};
/**
 * 关闭全局loading
 */
export const hideLoading = () => {
  const loadingEl = document.getElementById('pp-loading');
  loadingEl && document.body.removeChild(loadingEl as Node);
};

/**
 * 获取所有icons目录
 */
export const getAllIcons = () => {
  return Object.keys(icons).map((name) => ({
    name,
    component: icons[name],
  }));
};
