package cn.sw.study.common.test;

/**
 * Created by shaowei on 2017/6/2.
 */
public class TestString {
    public static void main(String[] args) {
        String a = "aaa";
        String b = "aaa";
        String c = new String("aaa");
        System.out.println(a == b);
        System.out.println(a == c);
        System.out.println(a.equals(c));
    }
}
