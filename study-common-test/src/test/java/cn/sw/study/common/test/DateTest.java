package cn.sw.study.common.test;

import org.junit.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by shaowei on 2016/12/15.
 */
public class DateTest {
    @Test
    public void testMonthStart() throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMM");
        System.out.println(sdf.parse("201612"));
        System.out.println(new Date());
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(sdf.parse("201612"));
        int month = calendar.get(Calendar.MONTH);
        calendar.set(Calendar.MONTH, month + 1);
        System.out.println(calendar.getTime());
    }
}
