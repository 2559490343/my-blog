import KoaRouter from "koa-router";
import { RowDataPacket } from "mysql2";

export const getKoaRouter = () => new KoaRouter();

const firstLetterToUpper = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};
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

export const transformDataSource = <T>(dataSource: RowDataPacket[]) => {
  return dataSource.map((data) => {
    const result: Record<string, any> = {};
    for (const key in data) {
      result[nameToHump(key)] = data[key];
    }
    return result;
  }) as T[];
};
