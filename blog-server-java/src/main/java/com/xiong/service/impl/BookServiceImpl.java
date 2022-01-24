package com.xiong.service.impl;


import com.xiong.beans.Book;
import com.xiong.dao.BookDao;
import com.xiong.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements IBookService {

    @Autowired
    private BookDao bookDao;

    @Override
    public Boolean update(Book book) {
        return bookDao.update(book);
    }

    @Override
    public Boolean insert(Book book) {
        return bookDao.insert(book);
    }

    @Override
    public Boolean delete(Integer id) {
        return bookDao.delete(id);
    }

    @Override
    public List<Book> getList(String name, String type, int start, int end) {
        return bookDao.getList(name, type, start, end);
    }

    @Override
    public Book getById(Integer id) {
        return bookDao.getById(id);
    }

    @Override
    public int getTotalCount() {
        return bookDao.getTotalCount();
    }
}
