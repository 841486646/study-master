package cn.sw.study.common.test.reference;


import java.lang.ref.WeakReference;

/**
 * 测试弱引用
 * Created by shaowei on 2017/8/14.
 */
public class TestWeakReferece {
    public static void main(String[] args) {
        Object o = new Object();
        WeakReference<Object> weak = new WeakReference<Object>(o);
        o = null;
        int i = 0;
        while (weak.get() != null) {
            i++;
            System.out.println("Object is not null. count is " + i);
            if (i % 10 == 0) {
                System.gc();
                System.out.println("System.gc() was called!");
            }
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {

            }
        }
        System.out.println(weak.get());
        System.out.println("object o was cleared by JVM!");
    }
}
