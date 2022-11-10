import mysql from "mysql2/promise";
import config from "~/config";

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

export default DBPool
