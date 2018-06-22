package cn.sw.study.web.service.impl;

import cn.sw.study.web.dao.UserMapperExt;
import cn.sw.study.web.model.User;
import cn.sw.study.web.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by shaowei on 2017/4/26.
 */
@Service("userService")
public class UserServiceImpl implements UserService{
    @Resource
    UserMapperExt userMapperExt;

    public void addInfo() {
        addOne();
    }

    public void selectTest() {
        userMapperExt.selectTest();
    }

    @Override
    public boolean validateUserName(String username) {
        if("tom".equals(username)){
            return false;
        }
        return true;
    }

    public void addOne() {
        User record = new User();
        record.setLoginName("aa");
        record.setPwd("33");
        userMapperExt.insertSelective(record);
        System.out.println("最新插入的主键值：" + record.getId());
    }
}
