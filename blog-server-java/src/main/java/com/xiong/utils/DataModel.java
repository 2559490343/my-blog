package com.xiong.utils;

import java.util.List;

public class DataModel {
    private List list;
    private int total;

    public void setList(List list) {
        this.list = list;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public int getTotal() {
        return total;
    }

    @Override
    public String toString() {
        return "DataModel{" +
                "list=" + list +
                ", total=" + total +
                '}';
    }

    public List getList() {
        return list;
    }
}
