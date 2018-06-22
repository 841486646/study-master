package cn.sw.study.web.service.impl;

import cn.sw.study.web.dao.UserMapper;
import cn.sw.study.web.model.User;
import cn.sw.study.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

/**
 * 用户业务类
 * Created by shaowei on 2017/4/26.
 */
@Service("userService")
public class UserServiceImpl implements UserService{
    @Autowired
    UserMapper userMapper;

    @Transactional
    public void addInfo() {
        addOne();
    }

    @Transactional
    public void addOne() {
        User record = new User();
        record.setLoginName("tom");
        record.setPwd("111111");
        record.setMobile("13913913913");
        record.setUsable(1);
        record.setCreateTime(new Date());
        userMapper.insertSelective(record);

        int i = 1/0;    // 测试事物的回滚
    }
}
