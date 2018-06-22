package cn.sw.study.web.controller;

import cn.sw.study.web.vo.UserVo;
import cn.sw.study.web.vo.ZtreeNodeVo;
import com.alibaba.fastjson.JSONArray;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by shaowei on 2016/12/26.
 */
@Controller
@RequestMapping("/test")
public class TestController {
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index(HttpServletRequest request){
        System.out.println(request.getServletPath());
        System.out.println(request.getServletContext().getContextPath());
        System.out.println(request.getServletContext().getRealPath(""));
        System.out.println(request.getServletContext().getRealPath("log4j2.xml"));
        return "index";
    }

    @RequestMapping(value = "/elTest", method = RequestMethod.GET)
    public String elTest(HttpServletRequest request, Model model){
        model.addAttribute("testValue", "Hello, I am a cat!");
        return "elTest";
    }

    @RequestMapping(value = "/zTreeTest", method = RequestMethod.GET)
    public String zTreeTest(HttpServletRequest request, Model model){
        List<ZtreeNodeVo> ztreeNodeVos = new ArrayList<ZtreeNodeVo>();
        ZtreeNodeVo node1 = new ZtreeNodeVo("1", "0", "根节点");
        ZtreeNodeVo node2 = new ZtreeNodeVo("2", "1", "一级1");
        ZtreeNodeVo node3 = new ZtreeNodeVo("3", "1", "一级2");
        ZtreeNodeVo node4 = new ZtreeNodeVo("4", "2", "二级1");
        ZtreeNodeVo node5 = new ZtreeNodeVo("5", "2", "二级2");
        ztreeNodeVos.add(node1);
        ztreeNodeVos.add(node2);
        ztreeNodeVos.add(node3);
        ztreeNodeVos.add(node4);
        ztreeNodeVos.add(node5);
        model.addAttribute("nodes", JSONArray.toJSONString(ztreeNodeVos));
        return "zTreeTest";
    }

    @RequestMapping("/ueditor")
    public String ueditor(){
        return "ueditor";
    }

    @RequestMapping("/login")
    @ResponseBody
    public Object login(String userName, String password){
        System.out.println(userName);
        System.out.println(password);
        return "success";
    }

    @RequestMapping("/login1")
    @ResponseBody
    public Object login(UserVo userVo){
        if(userVo != null){
            System.out.println(userVo.getUserName());
            System.out.println(userVo.getPassword());
        }else{
            System.out.println("userVo is null");
        }
        return new Object();
    }

    @RequestMapping("/log")
    @ResponseBody
    public Object log(String userName, String password) throws InterruptedException {
        System.out.println("log start...");
        Thread.sleep(30000);
        System.out.println("log end...");
        return new Object();
    }

    @RequestMapping("/testNoRequestParam")
    @ResponseBody
    public String testNoRequestParam(String userName) {
        String testStr = "testNoRequestParam userName: " + userName;
        System.out.println(testStr);
        return testStr;
    }

    @RequestMapping("/testRequestParam")
    @ResponseBody
    public String testRequestParam(@RequestParam String userName) {
        String testStr = "testRequestParam userName: " + userName;
        System.out.println(testStr);
        return testStr;
    }

    @RequestMapping("/testRequestParamNoRequire")
    @ResponseBody
    public String testRequestParamNoRequire(@RequestParam(required = false) String userName) {
        String testStr = "testRequestParamNoRequire userName: " + userName;
        System.out.println(testStr);
        return testStr;
    }

    @RequestMapping("/testRequestParamDefaultValue")
    @ResponseBody
    public String testRequestParamDefaultValue(@RequestParam(defaultValue = "default value") String userName) {
        String testStr = "testRequestParamDefaultValue userName: " + userName;
        System.out.println(testStr);
        return testStr;
    }

    @RequestMapping("/testRequestParamValue")
    @ResponseBody
    public String testRequestParamValue(@RequestParam(value = "name") String userName) {
        String testStr = "testRequestParamValue userName: " + userName;
        System.out.println(testStr);
        return testStr;
    }
}













