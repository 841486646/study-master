package cn.sw.study.common.test.lambda;

import java.util.Arrays;
import java.util.Comparator;

/**
 * Lambda排序数组
 * Created by shaowei on 2017/8/9.
 */
public class TestSort {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Orange", "Peach", "Pear", "Banana", "Grape"};

        // 使用匿名内部类排序 fruits
        Arrays.sort(fruits, new Comparator<String>() {
            @Override
            public int compare(String a, String b) {
                return (a.compareTo(b));
            }
        });

        for (String fruit : fruits) {
            System.out.print(fruit + "; ");
        }
        System.out.println();

        String[] fruits1 = {"Peach", "Pear", "Banana", "Grape", "Apple", "Orange"};

        //使用 lambda expression 排序 players
        Arrays.sort(fruits1, (String a, String b) -> (a.compareTo(b)));

        for (String fruit : fruits1) {
            System.out.print(fruit + "; ");
        }
    }
}
