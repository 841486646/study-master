package cn.sw.study.common.test.chart;

/**
 * 学校信息表
 * Created by shaowei on 2017/8/16.
 */
public class SchoolInfo {
    private int id;
    private String school;
    private String area;
    private int amount;

    public SchoolInfo(int id, int amount, String area, String school) {
        this.amount = amount;
        this.area = area;
        this.id = id;
        this.school = school;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }
}
