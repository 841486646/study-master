package cn.sw.study.common.test.webservice.client;

/**
 * 测试webservice服务客户端
 * Created by shaowei on 2017/8/19.
 */
public class Client {
    public static void main(String[] args) {
        TestJdkWebServiceService service = new TestJdkWebServiceService();
        TestJdkWebService testService = service.getTestJdkWebServicePort();
        System.out.println(testService.sayHello());
    }
}
