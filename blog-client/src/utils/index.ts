interface storageProps {
  value: any;
  outDate: number;
}
/**
 * 封装一个有过期时间的localstorage存储
 * @param {string} key 存储key值
 * @param {any} value 存储的value值
 * @param {number} timeout 过期时间
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

export const getStorage: (key: string) => storageProps = (key) => {
  const obj = JSON.parse(
    localStorage.getItem(key) || '{ "value": null, "outDate": 0 }',
  );
  if (Date.now() > obj.outDate) return { value: null, outDate: 0 };
  return {
    value: obj.value,
    outDate: obj.outDate,
  };
};

export const removeStorage: (key: string) => void = (key) => {
  localStorage.removeItem(key);
};
