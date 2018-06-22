package cn.sw.study.common.test.spring.aop;

import org.springframework.stereotype.Component;

/**
 * 日志处理类
 * Created by shaowei on 2017/7/31.
 */
@Component
public class LogHandler
{
    public void LogBefore()
    {
        System.out.println("Log before method");
    }

    public void LogAfter()
    {
        System.out.println("Log after method");
    }
}
