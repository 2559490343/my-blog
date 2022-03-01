package com.xiong.controller;

import com.xiong.beans.Book;
import com.xiong.controller.RequestWrappers.BookRequestWrappers;
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


    @PostMapping
    public Result getList(@RequestBody BookRequestWrappers brw) {
        Book book = brw.getBook();
        System.out.println(book);
        String name = book.getName();
        String type = book.getType();
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
        Result result = new Result(new DataModel());
        result.setCode(200);
        List<Book> list = bookService.getList("%" + name + "%", "%" + type + "%", pages[0], pages[1]);
        DataModel data = (DataModel) result.getData();
        data.setList(list);
        data.setTotal(total);
        result.setData(data);
        return result;
    }

    @PutMapping
    public Result insert(@RequestBody Book book) {
        if (book.getDescription() == null) {
            book.setDescription("");
        }
        Result result = new Result(new Object());
        try {
            bookService.insert(book);
            result.setCode(200);
            result.setData(null);
            result.setMsg("插入成功");
        } catch (Exception e) {
            result.setCode(500);
            result.setData(null);
            result.setMsg("服务器错误");
        }
        return result;
    }

    @DeleteMapping("/{id}")
    public Result deleteById(@PathVariable int id) {
        Result result = new Result(new Object());
        try {
            bookService.delete(id);
            result.setCode(200);
            result.setData(null);
            result.setMsg("删除成功");
        } catch (Exception e) {
            result.setCode(500);
            result.setData(null);
            result.setMsg("服务器错误");
        }

        return result;
    }

    @GetMapping("/{id}")
    public Result getById(@PathVariable int id) {
        Book book = bookService.getById(id);
        Result result = new Result(new Book());
        result.setCode(200);
        result.setData(book);
        result.setMsg("查询成功");

        return result;
    }
}
