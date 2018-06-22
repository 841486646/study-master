package cn.sw.study.common.test.webservice;

import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;

/**
 * jdk发布webservice服务
 */
@WebService
public class TestJdkWebService {
    @WebMethod
    public String sayHello()
    {
        return "Hello World!";
    }

    public static void main(String[] args)
    {
        //可以做到不借助web容器（如Tomcat）发布Web Service应用
        //访问：
        //http://localhost:8088/TestJdkWebService?wsdl
        Endpoint.publish("http://localhost:8088/TestJdkWebService", new TestJdkWebService());
        System.out.println("发布webservice成功!");
    }

    //wsimport -s E:\work\datai\code_study\study-master\study-common-test\src\main\java
    // -encoding utf-8 -p cn.sw.study.common.test.webservice.client
    // http://localhost:8088/TestJdkWebService?wsdl
}