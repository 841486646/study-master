package cn.sw.study.common.test.lambda;

/**
 * Lambda内部类测试
 * Created by shaowei on 2017/8/9.
 */
public class TestInnerClass {
    public static void main(String[] args) {
        // 使用匿名内部类
        new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Hello world !");
            }
        }).start();

        // 使用 lambda expression
        new Thread(() -> System.out.println("Lambda hello world !")).start();
    }
}
