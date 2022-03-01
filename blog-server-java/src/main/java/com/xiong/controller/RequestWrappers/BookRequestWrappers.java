package com.xiong.controller.RequestWrappers;

import com.xiong.beans.Book;

public class BookRequestWrappers {
    private Book book;
    private int pageSize;

    public void setBook(Book book) {
        this.book = book;
    }

    public Book getBook() {

        return book;
    }

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

}
