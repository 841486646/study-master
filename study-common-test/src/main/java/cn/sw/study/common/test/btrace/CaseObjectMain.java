package cn.sw.study.common.test.btrace;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by shaowei on 2017/1/9.
 */
public class CaseObjectMain {
    int times = 10;

    public static void main(String[] args) {
        CaseObjectMain main = new CaseObjectMain();
        try {
            main.begin();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void begin() throws Exception {

        CaseObject object = new CaseObject();
        while (true) {
            times++;
            boolean result = doWork(object);
            Thread.sleep(1000);
        }
    }

    public boolean doWork(CaseObject object) throws Exception {
        Random random = new Random();

        boolean temp = object.execute(random.nextInt(1000));
        return temp;
    }


}
