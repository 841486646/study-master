package cn.sw.study.web;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.security.ProtectionDomain;

/**
 * Created by shaowei on 2017/7/4.
 * 打印出指定class做在的jar包路径
 */
public class PrintClassSource {
    public PrintClassSource() {
        ProtectionDomain pd = JsonInclude.Include.class.getProtectionDomain();
        System.out.println("-------------------:" + pd.getCodeSource().getLocation());
    }
}
