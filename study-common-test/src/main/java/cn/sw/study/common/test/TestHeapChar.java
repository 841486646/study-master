package cn.sw.study.common.test;

import cn.sw.study.utils.ImageUtils;
import com.alibaba.druid.sql.visitor.functions.Char;

import java.util.ArrayList;
import java.util.List;

/**
 * 测试堆内存里的char
 * Created by shaowei on 2017/3/1.
 */
public class TestHeapChar {
    static List<String> list = new ArrayList<String>();
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10000000; i++) {
            list.add(new String(new char[10000]));
            if(i%100==0){
                System.out.println("---------------");
                Thread.sleep(3000);
            }
        }
    }
}
