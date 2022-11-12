import KoaRouter from "koa-router";
import { RowDataPacket } from "mysql2";

export const getKoaRouter = () => new KoaRouter();

const firstLetterToUpper = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
// 下划线转驼峰
export const nameToHump = (fileName = "") => {
  const nameArr = fileName.split("_") || [];
  return nameArr.reduce((pre, word, idx) => {
    if (idx === 0) {
      pre += word;
    } else {
      pre += firstLetterToUpper(word);
    }
    return pre;
  }, "");
};
//驼峰转下划线
export const nameToLine = (name: string) => {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
};

export const transformDataSource = <T>(dataSource: RowDataPacket[]) => {
  return dataSource.map((data) => {
    const result: Record<string, any> = {};
    for (const key in data) {
      result[nameToHump(key)] = data[key];
    }
    return result;
  }) as T[];
};
