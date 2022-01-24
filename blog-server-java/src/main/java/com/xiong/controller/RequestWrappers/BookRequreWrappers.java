package com.xiong.controller.RequestWrappers;

public class BookRequreWrappers {
    private String name;
    private String type;
    private int pageSize;
    private int pageNum;

    public int getPageSize() {
        return pageSize;
    }

    public int getPageNum() {
        return pageNum;
    }

    public void setPageSize(int pageSize) {

        this.pageSize = pageSize;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }

    public void setName(String name) {

        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }
}
