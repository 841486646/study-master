package cn.sw.study.common.test.gson;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.util.List;

/**
 * 测试gson的解析json
 * Created by shaowei on 2017/8/23.
 */
public class TestGson {
    public static void main(String[] args) {
        //解析单条无嵌套Json数据
        String jsonStr = "{'name':'Tom', 'age':30, 'sex':'male'}";
        Gson gson = new Gson();
        Student student = gson.fromJson(jsonStr, Student.class);
        System.out.println(student);

        //解析单条有嵌套的Json数据
        String jsonStr1 = "{'name':'Tom', 'age':30, 'sex':'male', 'grade':{'course':'java','score':'100'}}";
        Gson gson1 = new Gson();
        Student student1 = gson1.fromJson(jsonStr1, Student.class);
        System.out.println(student1);

        //解析Json数组
        String jsonStr2 = "[{'name':'Tom', 'age':30, 'sex':'male', 'grade':{'course':'java','score':'100'}}," +
                "{'name':'Lili', 'age':25, 'sex':'female', 'grade':{'course':'java','score':'100'}}]";
        Gson gson2 = new Gson();
        List<Student> students = gson2.fromJson(jsonStr2, new TypeToken<List<Student>>(){}.getType());
        System.out.println(students);
    }
}
