import mysql from "mysql2/promise";
import config from "~/config";
import { nameToLine } from ".";
import { SqlType, ObjType } from "./types";

class DBPool {
  private static poolInstance?: mysql.Pool;
  public static init() {
    try {
      const pool = mysql.createPool(config.database);
      DBPool.poolInstance = pool;
      return pool;
    } catch (error) {
      console.error("数据库连接失败!error: ", error);
    }
  }
  public static getDBPool = () => {
    return DBPool.poolInstance! ?? DBPool.init()!;
  };
}

export default DBPool;

const selectSql = (schema: string, args?: ObjType) => {
  const params: any[] = [];
  let conditions = ``;
  if (args) {
    const { pageNum, pageSize, ...otherParams } = args;
    const keys = Object.keys(otherParams);
    if (keys.length) {
      conditions += ` WHERE`;
      keys.forEach((key, idx) => {
        conditions += `${idx === 0 ? "" : " and"} ${nameToLine(key)} LIKE ? `;
        params.push(`%${otherParams[key]}%`);
      });
    }
    if (pageNum && pageSize) {
      conditions += `LIMIT ${(pageNum - 1) * pageSize},${pageSize}`;
    }
  }
  const sql = `SELECT * FROM ${schema}${conditions}`;
  return [sql, params];
};
const selectOneSql = (schema: string, args?: ObjType) => {
  const params: any[] = [];
  const { id } = args!;
  const sql = `SELECT * FROM ${schema} WHERE id=${id}`;
  params.push(id);
  return [sql, params];
};
const insertSql = (schema: string, args?: ObjType) => {
  const params: any[] = [];
  const keys = Object.keys(args!);
  const fields = keys.map((key) => nameToLine(key)).join(",");
  const spaces = keys
    .map((key) => {
      params.push(args![key]);
      return "?";
    })
    .join(",");
  const sql = `INSERT INTO ${schema} (${fields}) values (${spaces})`;
  return [sql, params];
};
const updateSql = (schema: string, args?: ObjType) => {
  const params: any[] = [];
  const { id, ...otherParams } = args!;
  const keys = Object.keys(otherParams!);
  const conditions = keys
    .map((key) => {
      params.push(args![key]);
      return `${nameToLine(key)}=?`;
    })
    .join(",");
  const sql = `update ${schema} set ${conditions} where id=${id}`;
  return [sql, params];
};
const deleteSql = (schema: string, args?: ObjType) => {
  let sql = `DELETE FROM ${schema} where id=?`;
  const params: any[] = [args!.id];
  return [sql, params];
};
const transformSql = (type: SqlType, schema: string, args?: ObjType) => {
  let fn;
  switch (type) {
    case "SELECT":
      fn = selectSql;
      break;
    case "SELECTONE":
      fn = selectOneSql;
      break;
    case "INSERT":
      fn = insertSql;
      break;
    case "UPDATE":
      fn = updateSql;
      break;
    case "DELETE":
      fn = deleteSql;
      break;
  }
  const [sql, params] = fn(schema, args);
  console.log("sql--", sql);
  console.log("params--", params);
  return [sql, params];
};

export const executeSql = async <T = ObjType>(
  type: SqlType,
  schema: string,
  args?: ObjType
) => {
  const pool = DBPool.getDBPool();
  const [sql, params] = transformSql(type, schema, args);
  const [rows, fields] = await pool.execute(sql as string, params);
  console.log("rows--", rows);

  return {
    rows: rows as T[],
    fields,
  };
};
