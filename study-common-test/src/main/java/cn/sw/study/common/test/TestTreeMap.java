package cn.sw.study.common.test;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.TreeMap;

/**
 * 测试TreeMap
 * Created by shaowei on 2017/4/18.
 */
public class TestTreeMap {
    public static void main(String[] args) {
        TreeMap<Long, String> treeMap = new TreeMap<Long, String>();
        treeMap.put((long)2, "2");
        treeMap.put((long)1, "1");
        treeMap.put((long)3, "3");
        treeMap.put((long)4, "4");
//        System.out.println("default:" + treeMap);
//        System.out.println("tailMap:" + treeMap.tailMap((long)2));
//        System.out.println("headMap:" + treeMap.headMap((long)3));
//        System.out.println("subMap:" + treeMap.subMap((long)2,(long)3));

//        System.out.println("firstKey:" + treeMap.firstKey());
//        System.out.println("firstEntry:" + treeMap.firstEntry());
//        System.out.println("lastKey:" + treeMap.lastKey());
//        System.out.println("lastEntry:" + treeMap.lastEntry());
//
//        TreeMap<Long, String> buyOrderMap = new TreeMap();
//        Long one = new Long("901");
//        Long anotherOne = new Long("901");
//        buyOrderMap.put(one, "1");
//        System.out.println(buyOrderMap.get(anotherOne));
//
//
        TreeMap<Long, String> buyOrderMap1 = new TreeMap();
        Long one1 = new Long("901");
        Long anotherOne1 = new Long("901");
        buyOrderMap1.put(one1, "1");
        buyOrderMap1.put(anotherOne1, "2");
        System.out.println(buyOrderMap1);

        //System.out.println(new TreeMap().lastEntry().getValue());

//        System.out.println(new BigDecimal(100.1));
//        System.out.println(BigDecimal.valueOf(100.1));
//        System.out.println(new BigDecimal("100.1"));
//        System.out.println((double)2);
//        System.out.println(524/100);
//        System.out.println(524/100.0);
    }
}
