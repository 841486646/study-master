package cn.sw.study.common.test.generic;

import java.util.List;

/**
 * Created by shaowei on 2018/5/8.
 */
public class Page <T>{
    private String currentPageCount;
    private String last;
    private List<T> list;

    public String getCurrentPageCount() {
        return currentPageCount;
    }

    public void setCurrentPageCount(String currentPageCount) {
        this.currentPageCount = currentPageCount;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
    }

    public List<T> getList() {
        return list;
    }

    public void setList(List<T> list) {
        this.list = list;
    }
}
