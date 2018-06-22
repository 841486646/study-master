package cn.sw.study.common.test.multireturn;

import java.util.HashMap;
import java.util.Map;

/**
 * 方法一次返回多个值测试类
 */
public class Test {

    /**
     * 使用集合的方式返回多个值
     *
     * @return
     */
    public static Map<String, Double> testCollection() {
        Map<String, Double> result = new HashMap<>();
        result.put("key1", 10.1);
        result.put("key2", 10.2);
        return result;
    }

    /**
     * 使用封装对象的方式返回多个值
     *
     * @return
     */
    public static Person testObject() {
        Person result = new Person();
        result.setName("Tom");
        result.setAge(20);
        return result;
    }

    /**
     * 使用对象引用的方式返回多个值
     *
     * @return
     */
    public static void testAppoint(Person person) {
        person.setName("Tom");
        person.setAge(30);
    }

    /**
     * 使用泛型元组的方式返回多个值
     *
     * @return
     */
    public static TwoTuple<Person, Integer> testTwoTuple() {
        return new TwoTuple<Person, Integer>(new Person(), 10);
    }

//    public static void main(String[] args) {
//        TwoTuple<Person, Integer> twoTuple = testTwoTuple();
//        System.out.println(twoTuple.a);
//        System.out.println(twoTuple.b);
//    }

    /**
     * 使用泛型元组的方式返回多个值
     *
     * @return
     */
    public static ThreeTuple<Person, Integer, Double> testThreeTuple() {
        return new ThreeTuple<Person, Integer, Double>(new Person(), 20, 0.12);
    }


    public static void main(String[] args) {
        ThreeTuple<Person, Integer, Double> threeTuple = testThreeTuple();
        System.out.println(threeTuple.a);
        System.out.println(threeTuple.b);
        System.out.println(threeTuple.c);

    }

//    public static void main(String[] args) {
//        Person result = new Person();
//        testAppoint(result);
//        System.out.println("name:" + result.getName());
//        System.out.println("age:" + result.getAge());
//    }

//    public static void main(String[] args) {
//        Person result = testObject();
//        System.out.println("name:" + result.getName());
//        System.out.println("age:" + result.getAge());
//    }


//    public static void main(String[] args) {
//        Map<String, Double> result = testCollection();
//        System.out.println("key1:" + result.get("key1"));
//        System.out.println("key2:" + result.get("key2"));
//    }
}
