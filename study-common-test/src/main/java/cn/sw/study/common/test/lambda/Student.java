package cn.sw.study.common.test.lambda;

/**
 * 学生信息类
 * Created by shaowei on 2017/8/9.
 */
public class Student {
    private String name;
    private int age;
    private String gender;
    private int grade;

    public Student( String name, int age, String gender, int grade) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.grade = grade;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public int getGrade() {
        return grade;
    }

    public String getName() {
        return name;
    }
}
