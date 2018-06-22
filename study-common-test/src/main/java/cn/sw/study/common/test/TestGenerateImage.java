package cn.sw.study.common.test;

import cn.sw.study.utils.ImageUtils;

/**
 * Created by shaowei on 2017/3/1.
 */
public class TestGenerateImage {
    public static void main(String[] args) {
        for (int i = 0; i < 1000000; i++) {
            ImageUtils.generateImage2Base64(ImageUtils.generateVCode(4));
        }
    }
}
