package cn.sw.study.common.test.lambda;

import java.util.Arrays;
import java.util.List;

/**
 * Lambda foreach例子测试
 * Created by shaowei on 2017/8/9.
 */
public class TestForEach {
    public static void main(String[] args) {
        String[] fruitArr = {"Apple", "orange", "peach", "Pear", "Banana", "Grape"};
        List<String> fruits = Arrays.asList(fruitArr);

        // 以前的循环方式
        for (String fruit : fruits) {
            System.out.print(fruit + "; ");
        }

        System.out.println();

        // 使用 lambda 表达式以及函数操作(functional operation)
        fruits.forEach((fruit) -> System.out.print(fruit + "; "));

        System.out.println();

        // 在 Java 8 中使用双冒号操作符(double colon operator)
        fruits.forEach(System.out::println);
    }
}
