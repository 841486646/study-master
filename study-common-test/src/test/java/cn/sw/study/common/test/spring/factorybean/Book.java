package cn.sw.study.common.test.spring.factorybean;

/**
 * Created by shaowei on 2017/7/13.
 * 书本
 */
public class Book {
    /**
     * 名字
     */
    private String name;
    /**
     * 价格
     */
    private double price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
