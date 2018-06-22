package cn.sw.study.common.test;

/**
 * Created by shaowei on 2017/5/15.
 */
public class TestSubString {
    public static void main(String[] args) {
        String content = "【交易代码】：611001   \n" +
                "      \n" +
                "【藏品名称】：南峤布朗2016";
        String s = content.substring(content.indexOf("【交易代码】：") + "【交易代码】：".length(), content.indexOf("【藏品名称】："));
        System.out.println(s.trim());
    }
}
