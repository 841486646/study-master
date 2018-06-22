package cn.sw.study.common.test.spring;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.io.IOException;

/**
 * 测试Bean
 */
public class TestBean {
    public static void main(String[] args) throws IOException {
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("applicationContext-test.xml");
        context.start();
        System.in.read();
    }
}
