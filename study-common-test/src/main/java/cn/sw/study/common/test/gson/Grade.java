package cn.sw.study.common.test.gson;

/**
 * Created by shaowei on 2017/8/23.
 */
public class Grade {
    private String course;
    private String score;

    public Grade(String course, String score) {
        this.course = course;
        this.score = score;
    }

    public String getScore() {
        return score;
    }

    public void setScore(String score) {
        this.score = score;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    @Override
    public String toString() {
        return "Grade{" +
                "course='" + course + '\'' +
                ", score='" + score + '\'' +
                '}';
    }
}
