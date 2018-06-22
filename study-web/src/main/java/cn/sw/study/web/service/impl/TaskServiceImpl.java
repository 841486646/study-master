package cn.sw.study.web.service.impl;

import org.springframework.stereotype.Component;

/**
 * Created by shaowei on 2017/4/26.
 */
@Component("taskService")
public class TaskServiceImpl {
    public void test() {
        System.out.println("定时任务开始执行了。。。。");
    }

//    public void test() {
//        userService.addInfo();
//        throw new RuntimeException("test");
//    }
}
