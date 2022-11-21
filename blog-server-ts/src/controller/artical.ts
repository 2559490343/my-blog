import Artical from "@/model/artical";
import { getNowTimeString, transformDataSource } from "@/utils";
import { executeSql } from "@/utils/db";
import { ListResult, Result } from "@/utils/result";
import { Controller, MySqlErrorType } from "@/utils/types";
import { Context } from "koa";
import { RowDataPacket } from "mysql2";

export default class ArticalsController implements Controller {
  private schema = "articals";
  async getList(ctx: Context) {
    const { rows } = await executeSql(
      "SELECT",
      this.schema,
      ctx.request.body ?? {}
    );
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
    const { rows } = await executeSql<Artical>("SELECTONE", this.schema, {
      id,
    });
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
    const result = new Result();
    const params = ctx.request.body as Artical;
    params.createUser = "admin";
    params.createTime = getNowTimeString();
    try {
      const { rows } = await executeSql("INSERT", this.schema, params);
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
    params.updateTime = getNowTimeString();
    params.updateUser = "admin";
    const result = new Result();
    try {
      await executeSql("UPDATE", this.schema, params);
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
    try {
      await executeSql("DELETE", this.schema, { id });
      result.setMessage("删除成功!");
    } catch (error) {
      const { message } = error as MySqlErrorType;
      result.setMessage(message);
      result.setSuccess(false);
    }
    ctx.body = result;
  }
}
