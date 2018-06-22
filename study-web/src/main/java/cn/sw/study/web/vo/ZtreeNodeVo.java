package cn.sw.study.web.vo;

/**
 * Created by shaowei on 2017/11/8.
 */
public class ZtreeNodeVo {
    private String id;
    private String pId;
    private String name;

    public ZtreeNodeVo(String id, String pId, String name) {
        this.id = id;
        this.pId = pId;
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getpId() {
        return pId;
    }

    public void setpId(String pId) {
        this.pId = pId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
