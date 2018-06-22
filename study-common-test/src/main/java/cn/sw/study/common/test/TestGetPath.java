package cn.sw.study.common.test;

/**
 * 测试获取文件路径
 * Created by shaowei on 2017/9/4.
 */
public class TestGetPath {
    public static void main(String[] args) {
        new TestGetPath().printFilePath();
    }

    private void printFilePath() {
        System.out.println(this.getClass().getResource(""));
        System.out.println(this.getClass().getResource("/"));
        System.out.println(this.getClass().getClassLoader().getResource(""));
        System.out.println(this.getClass().getClassLoader().getResource("1/a.txt"));
        System.out.println(Thread.currentThread().getContextClassLoader().getResource(""));
        System.out.println(Thread.currentThread().getContextClassLoader().getResource("1/a.txt"));
        System.out.println(ClassLoader.getSystemResource(""));
        System.out.println(ClassLoader.getSystemResource("1/a.txt"));
    }
}
