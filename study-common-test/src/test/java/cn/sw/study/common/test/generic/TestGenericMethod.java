package cn.sw.study.common.test.generic;

/**
 * 泛型方法测试类
 * Created by shaowei on 2018/5/7.
 */
public class TestGenericMethod {
    public <T> void genericMethod(T value) {
        System.out.println(value);
    }

    public static void main(String[] args) {
        Fruit fruit = new Fruit();
        fruit.setId(1);
        fruit.setName("苹果");
        fruit.setSize(30);
        new TestGenericMethod().genericMethod(fruit);
    }
}

class Fruit {
    private int id;
    private String name;
    private int size;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getSize() {
        return size;
    }

    public void setSize(int size) {
        this.size = size;
    }

    @Override
    public String toString() {
        return "Fruit{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", size=" + size +
                '}';
    }
}
