package cn.sw.study.common.test.spring.aop;

import cn.sw.study.common.test.spring.aop.service.UserService;
import cn.sw.study.common.test.spring.aop.service.UserServiceImpl;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * AOP测试类
 * Created by shaowei on 2017/7/31.
 */
public class AopTest {
    @Test
    public void testProxyTargetClass(){
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext-test-aop.xml");
        UserService userService = (UserService)context.getBean("userServiceImpl");

        //proxy-target-class="true"，为false时会报转换错误java.lang.ClassCastException: com.sun.proxy.$Proxy9 cannot be cast to cn.sw.study.common.test.spring.aop.service.UserServiceImpl
//        UserServiceImpl userService = (UserServiceImpl)context.getBean("userServiceImpl");
        userService.addUser();
    }
}
