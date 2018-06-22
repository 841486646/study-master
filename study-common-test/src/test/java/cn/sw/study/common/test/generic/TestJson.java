package cn.sw.study.common.test.generic;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.TypeReference;

import java.util.List;

/**
 * Created by shaowei on 2018/5/8.
 */
public class TestJson {
    public static void main(String[] args) {
        String s = "{\"currentPageCount\":12,\"last\":false,\"list\":[{\"birthday\":\"1981-2-1\",\"deptnames\":\"信息部\",\"email\":\"333@qq.com\",\"mobile\":\"18011111111\",\"names\":\"sam xie\",\"username\":\"admins\"},{\"$ref\":\"$.list[0]\"}],\"pageNumber\":2,\"pageSize\":12}";     //{\"$ref\":\"$.list[0]\"}指向list[0],重复，直接使用引用。
        //下面直接两行就搞定分页对象、list对象
        Page<User> page = getPage(s, User.class);
        List<User> users = page.getList();

        Page<User> page1 = getPage(s, new TypeReference<Page<User>>() {
        });
        System.out.println(new TypeReference<Page<Page<User>>>() {
        }.getType());
        List<User> users1 = page1.getList();
    }

    public static <T> Page<T> getPage(String jsonString, Class<T> clz) {
        try {
            Page<T> page = JSON.parseObject(jsonString,
                    new TypeReference<Page<T>>() {
                    });
            //泛型类型调用paseObject的时候，使用parseObject可以转换Class，
            // 但是后边传TypeReference或者Type就解析不出泛型类型了，需要再转换一次
            List<T> list = JSONArray.parseArray(page.getList().toString(), clz);
            page.setList(list);
            return page;
        } catch (Exception e) {
            // TODO: handle exception
        }
        return null;
    }

    public static <T> Page<T> getPage(String jsonString, TypeReference<Page<T>> type) {
        try {
            return JSON.parseObject(jsonString, type);
        } catch (Exception e) {
            // TODO: handle exception
        }
        return null;
    }
}
