package cn.sw.study.common.test.spring.aop.service;

import org.springframework.stereotype.Service;

/**
 * Created by shaowei on 2017/7/31.
 */
@Service
public class UserServiceImpl  {
    public void addUser() {
        System.out.println("add user");
    }
}
