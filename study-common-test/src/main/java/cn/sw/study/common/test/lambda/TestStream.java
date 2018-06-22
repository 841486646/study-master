package cn.sw.study.common.test.lambda;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.Stack;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

/**
 * 流相关操作例子
 * Created by shaowei on 2017/8/9.
 */
public class TestStream {
    public static void main(String[] args) {
        List<Student> students = new ArrayList<Student>();
        students.add(new Student("Tom", 12, "male", 5));
        students.add(new Student("Lili", 11, "female", 4));
        students.add(new Student("John", 8, "male", 1));
        students.add(new Student("Lucy", 10, "female", 3));
        System.out.println("所有学生：");
        students.forEach((p) -> System.out.printf("%s;", p.getName()));
        System.out.println();
//        System.out.println("下面是年龄大于10岁，年级大于4的学生：");
//        students.stream()
//                .filter((p) -> (p.getAge() > 10))
//                .filter((p) -> (p.getGrade() > 4))
//                .forEach((p) -> System.out.printf("%s;", p.getName()));
//        System.out.println();
//        System.out.println("最前面2个学生：");
//        students.stream()
//                .limit(2)
//                .forEach((p) -> System.out.printf("%s;", p.getName()));
//        System.out.println();
//        System.out.println("跳过前面2个学生：");
//        students.stream()
//                .skip(2)
//                .forEach((p) -> System.out.printf("%s;", p.getName()));
//        System.out.println();
//        System.out.println("年龄最大的学生：");
//        System.out.println(students.stream()
//                .max((p1, p2) -> (p1.getAge() - p2.getAge()))
//                .get().getName());
//        System.out.println("年龄最小的学生：");
//        System.out.println(students.stream()
//                .min((p1, p2) -> (p1.getAge() - p2.getAge()))
//                .get().getName());
//        System.out.println("所有学生年龄总和：");
//        System.out.println(students.stream().parallel().mapToInt(Student::getAge).sum());
//
//        //数值流的构造
//        System.out.println("数据流的构造：");
//        IntStream.of(new int[]{1, 2, 3}).forEach(System.out::println);
//        IntStream.range(1, 3).forEach(System.out::println);
//        IntStream.rangeClosed(1, 3).forEach(System.out::println);
//
//        //流转换为其它数据结构
        Stream<String> stream = Stream.of("a", "b", "c");
        // 1. Array
        String[] strArray1 = stream.toArray(String[]::new);
        // 2. Collection
        List<String> list1 = stream.collect(Collectors.toList());
        List<String> list2 = stream.collect(Collectors.toCollection(ArrayList::new));
        Set set1 = stream.collect(Collectors.toSet());
        Stack stack1 = stream.collect(Collectors.toCollection(Stack::new));
        // 3. String
        String str = stream.collect(Collectors.joining()).toString();
    }
}
