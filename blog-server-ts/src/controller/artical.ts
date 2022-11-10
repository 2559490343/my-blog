import Artical from "@/model/artical";
import { transformDataSource } from "@/utils";
import DBPool from "@/utils/db";
import { Context } from "koa";
import { RowDataPacket } from "mysql2";

export default class ArticalsController {
  public static async getList(ctx: Context) {
    const pool = DBPool.getDBPool();
    const [rows] = await pool.execute("SELECT * FROM articals");
    ctx.body = transformDataSource<Artical>(rows as RowDataPacket[]);
  }
}
