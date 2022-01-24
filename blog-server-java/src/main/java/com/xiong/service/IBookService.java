package com.xiong.service;

import com.xiong.beans.Book;

import java.util.List;

public interface IBookService {
    Boolean update(Book book);

    Boolean insert(Book book);

    Boolean delete(Integer id);

    List<Book> getList(String name, String type, int start, int end);

    Book getById(Integer id);
    int getTotalCount();
}
