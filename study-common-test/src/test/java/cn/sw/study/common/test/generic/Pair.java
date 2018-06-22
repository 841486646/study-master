package cn.sw.study.common.test.generic;

/**
 * Created by shaowei on 2018/5/21.
 */
public class Pair<T, U> {
    private T first;
    private U second;

    public Pair(T first, U second) {
        this.first = first;
        this.second = second;
    }

    public T getFirst() {
        return first;
    }

    public U getSecond() {
        return second;
    }

    public void setFirst(T newValue) {
        first = newValue;
    }

    public void setSecond(U newValue) {
        second = newValue;
    }

    public static void main(String[] args) {
        String first = "first", second = "second";
        Pair<String, String> p = new Pair<String, String>(first, second);
        String result = p.getFirst();
    }
}
