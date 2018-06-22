package cn.sw.study.common.test;

import freemarker.template.Configuration;
import freemarker.template.Template;
import org.junit.Test;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

/**
 * 使用java生成word文档
 * Created by shaowei on 2017/8/31.
 */
public class WordTest {
    @Test
    public void genWord() throws Exception{
        // 要填充的数据, 注意map的key要和word中${xxx}的xxx一致
        Map<String,String> dataMap = new HashMap<String,String>();
        dataMap.put("name", "Tom");
        dataMap.put("age", "20");
        dataMap.put("province", "江苏");
        Configuration configuration = new Configuration();
        configuration.setDefaultEncoding("utf-8");
        configuration.setDirectoryForTemplateLoading(new File("F:\\apps\\test"));

        // 输出文档路径及名称
        File outFile = new File("F:\\apps\\test\\test-gen.doc");

        //以utf-8的编码读取ftl文件
        Template t =  configuration.getTemplate("test.xml","utf-8");
        Writer out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile), "utf-8"),10240);
        t.process(dataMap, out);
        out.close();
        System.out.println("word generate successfully!");
    }
}
