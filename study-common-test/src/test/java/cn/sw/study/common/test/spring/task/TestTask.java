package cn.sw.study.common.test.spring.task;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * 测试任务
 */
public class TestTask {
    public static void main(String[] args) {
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("applicationContext-task.xml");
        context.start();
    }
}


