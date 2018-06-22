package cn.sw.study.common.test.generic.wildcard;

/**
 * 学生类.
 */
public class Student extends Person{
    private String course;
    private int grade;

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    @Override
    public String toString() {
        return "Student{" +
                "course='" + course + '\'' +
                ", grade=" + grade +
                '}';
    }
}
