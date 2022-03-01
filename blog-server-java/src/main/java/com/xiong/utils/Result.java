package com.xiong.utils;

import org.springframework.stereotype.Component;

@Component
public class Result {
    private int code;
    private Object data;
    private String msg;


    public Result() {
    }

    public Result(Object d) {
        this.data = d;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public Object getData() {
        return data;
    }

    public String getMsg() {
        return msg;
    }
}


