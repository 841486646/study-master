package cn.sw.study.web.controller;

import cn.sw.study.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by shaowei on 2016/12/26.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("/addInfo")
    @ResponseBody
    public Object addInfo(){
        userService.addInfo();
        return new Object();
    }

    @RequestMapping(params = "test")
    @ResponseBody
    public Object test(){
        return new Object();
    }
}
