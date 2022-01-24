package com.xiong.controller;

import com.xiong.beans.Book;
import com.xiong.controller.RequestWrappers.BookRequreWrappers;
import com.xiong.service.impl.BookServiceImpl;
import com.xiong.utils.DataModel;
import com.xiong.utils.MyUtils;
import com.xiong.utils.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired
    BookServiceImpl bookService;

    @Autowired
    Result result;

    @PostMapping
    public Result getList(@RequestBody BookRequreWrappers brw) {
        String name = brw.getName();
        String type = brw.getType();
        int pageNum = brw.getPageNum();
        int pageSize = brw.getPageSize();
        int total = bookService.getTotalCount();
        int[] pages = MyUtils.getPages(pageNum, pageSize);
        if (name == null) {
            name = "";
        }
        if (type == null) {
            type = "";
        }
        result.setCode(200);
        List<Book> list = bookService.getList("%" + name + "%", "%" + type + "%", pages[0], pages[1]);
        DataModel data = result.getData();
        data.setList(list);
        data.setTotal(total);
        result.setData(data);
        return result;
    }

    @GetMapping
    public Book getById() {
        return bookService.getById(1);
    }
}
