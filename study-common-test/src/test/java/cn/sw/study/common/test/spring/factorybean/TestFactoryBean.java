package cn.sw.study.common.test.spring.factorybean;

import org.junit.Test;
import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by shaowei on 2017/7/13.
 * spring工厂bean测试类
 */
public class TestFactoryBean {
    @Test
    public void testGetBean(){
        AbstractApplicationContext context = new ClassPathXmlApplicationContext("applicationContext-test.xml");
        System.out.println(context.getBean("book"));
        System.out.println(context.getBean("&book"));
        context.start();
    }
}
