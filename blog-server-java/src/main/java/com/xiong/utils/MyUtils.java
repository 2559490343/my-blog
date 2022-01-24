package com.xiong.utils;

public class MyUtils {
    public static Boolean isEmptyString(String str) {
        return str == null || str.equals("");
    }

    public static int[] getPages(int pageNum, int pageSize) {
        int[] pages = new int[2];
        int start;
        int end;
        start = (pageNum - 1) * pageSize;
        end = start + pageSize;
        pages[0] = start;
        pages[1] = end;
        return pages;
    }
}
