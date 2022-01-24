package com.xiong.dao;

import com.xiong.beans.Book;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface BookDao {

    @Select("select * from book where id = #{id}")
    Book getById(Integer id);

    @Select("select * from book where name like #{name} and type like #{type} limit #{start},#{end}")
    List<Book> getList(@Param("name") String name, @Param("type") String type, @Param("start") int start, @Param("end") int end);

    @Select("select COUNT(*) from book")
    int getTotalCount();

    Boolean update(Book book);

    Boolean delete(Integer id);

    Boolean insert(Book book);

}
