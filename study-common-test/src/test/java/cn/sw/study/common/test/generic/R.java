package cn.sw.study.common.test.generic;

/**
 * Created by shaowei on 2018/5/21.
 */
public class R {

    public static void main(String[] args) {
        TClass t = new TClass<String>() {};
        //TClass<java.lang.String>
        System.out.println(t.getClass().getGenericSuperclass());
    }
}
class TClass<T> {
}