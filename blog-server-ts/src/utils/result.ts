import { ObjType } from "./types";

export class Result<T = null> {
  private code: number;
  private data: T;
  private message: string;
  private success: boolean;

  constructor() {
    this.code = 200;
    this.success = true;
    this.data = null as T;
    this.message = "";
  }
  public getCode(): number {
    return this.code;
  }
  public getSuccess(): boolean {
    return this.success;
  }
  public getData(): T {
    return this.data;
  }
  public getMessage(): string {
    return this.message;
  }
  public setCode(code: number): void {
    this.code = code;
  }
  public setSuccess(success: boolean): void {
    this.success = success;
  }
  public setData(data: T) {
    this.data = data;
  }
  public setMessage(message: string): void {
    this.message = message;
  }
}

interface ListDataType<T = ObjType> {
  totalCount: number;
  list: T[];
}

export class ListResult<T> extends Result<ListDataType<T>> {}
