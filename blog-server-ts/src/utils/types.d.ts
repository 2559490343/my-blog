import type { Context } from "koa";

export type ObjType = Record<string | number, any>;

export interface Controller {
  getList(ctx: Context): void;
  getById(ctx: Context): void;
  create(ctx: Context): void;
  update(ctx: Context): void;
  delete(ctx: Context): void;
}

export type MySqlErrorType = {
  message: string;
  code: string;
  errno: number;
  sql: string;
  sqlState: string;
  sqlMessage: string;
};
export type SqlType = "INSERT" | "UPDATE" | "SELECT" | "SELECTONE" | "DELETE";
