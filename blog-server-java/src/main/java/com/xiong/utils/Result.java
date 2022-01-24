package com.xiong.utils;

import org.springframework.stereotype.Component;

@Component
public class Result {
    private int code;
    private DataModel data = new DataModel();
    private String msg;

    public Result() {

    }

    public Result(int code, String msg, DataModel data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public void setData(DataModel data) {
        this.data = data;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public DataModel getData() {
        return data;
    }

    public String getMsg() {
        return msg;
    }
}


