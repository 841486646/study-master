package cn.sw.study.common.test;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by shaowei on 2017/2/24.
 */
public class TestHeapSpace {
    private static List<Object> list = new ArrayList<Object>();

    public static void main(String[] args) throws InterruptedException {
        while (true) {
            list.add(new byte[1024000]);
            Thread.sleep(200);
        }
    }
}
