import Artical from "@/model/artical";
import { executeSql, transformDataSource } from "@/utils";
import { ListResult, Result } from "@/utils/result";
import { Controller, MySqlErrorType, ObjType } from "@/utils/types";
import { Context } from "koa";
import { RowDataPacket } from "mysql2";

export default class ArticalsController implements Controller {
  async getList(ctx: Context) {
    const { rows } = await executeSql("SELECT * FROM articals");
    const result = new ListResult<Artical>();
    const list = transformDataSource<Artical>(rows as RowDataPacket[]);
    result.setData({
      list,
      totalCount: list.length,
    });
    ctx.body = result;
  }
  async getById(ctx: Context) {
    const { id } = ctx.params;
    const { rows } = await executeSql<Artical>(
      "SELECT * FROM articals WHERE id = ?",
      [id]
    );
    const result = new Result<Partial<Artical>>();
    if (rows.length) {
      result.setData(rows[0]);
      result.setMessage("查询成功!");
    } else {
      result.setData({});
      result.setMessage("查询无结果!");
    }
    ctx.body = result;
  }
  async create(ctx: Context) {
    const params = ctx.request.body as Artical;
    const result = new Result();
    const sql = "insert into articals (name) values (?)";
    try {
      const { rows } = await executeSql(sql, [params.name]);
      if (rows) {
        result.setMessage("创建成功!");
      }
    } catch (error) {
      const { message } = error as MySqlErrorType;
      result.setMessage(message);
      result.setSuccess(false);
    }
    ctx.body = result;
  }
  async update(ctx: Context) {
    const params = ctx.request.body as Artical;
    const { id, name } = params;
    const sql = "update articals set name=? where id=?";
    const result = new Result();
    try {
      await executeSql(sql, [name, id]);
      result.setMessage("更新成功!");
    } catch (error) {
      const { message } = error as MySqlErrorType;
      result.setMessage(message);
      result.setSuccess(false);
    }
    ctx.body = result;
  }
  async delete(ctx: Context) {
    const { id } = ctx.params;
    const result = new Result();
    const sql = "delete from articals where id=?";
    try {
      await executeSql(sql, [id]);
      result.setMessage("删除成功!");
    } catch (error) {
      const { message } = error as MySqlErrorType;
      result.setMessage(message);
      result.setSuccess(false);
    }
    ctx.body = result;
  }
}
