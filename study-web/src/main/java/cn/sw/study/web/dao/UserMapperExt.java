package cn.sw.study.web.dao;

import cn.sw.study.web.model.User;

import java.util.List;

public interface UserMapperExt extends UserMapper{
    List<User> selectTest();
}