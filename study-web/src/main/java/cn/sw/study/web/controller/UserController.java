package cn.sw.study.web.controller;

import cn.sw.study.web.service.UserService;
import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.util.Streams;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.*;

/**
 * Created by shaowei on 2016/12/26.
 */
@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("/userPicUpload")
    @ResponseBody
    public void userPicUpload(HttpServletRequest request){
        boolean isMultipart = ServletFileUpload.isMultipartContent(request);
        if(isMultipart){
            ServletFileUpload upload = new ServletFileUpload();
            upload.setHeaderEncoding("UTF-8");

            int i = 0;
            try {
                FileItemIterator iter = upload.getItemIterator(request);
                while(iter.hasNext()){
                    i++;
                    FileItemStream fi = iter.next();
                    InputStream in = null;
                    OutputStream fileout = null;
                    try {
                        String fileName = fi.getName();
                        File file = new File("f:/upload_test/"+ fileName.substring(0, fileName.lastIndexOf(".")) + "_" + i + fileName.substring(fileName.lastIndexOf(".")));
                        in = fi.openStream();
                        ByteArrayOutputStream bstream = new ByteArrayOutputStream();
                        Streams.copy(in, bstream, true);
                        fileout = new FileOutputStream(file);
                        bstream.writeTo(fileout);
                    } catch (IOException e) {
                        throw new RuntimeException("file copy error!",e);
                    }finally{
                        if(in != null){
                            try {
                                in.close();
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                        if(fileout != null){
                            try {
                                fileout.close();
                            } catch (IOException e) {
                                e.printStackTrace();
                            }
                        }
                    }
                }

            } catch (Exception e) {
                throw new RuntimeException("upload file error.",e);
            }
        }
    }


    @RequestMapping("/validateUserName")
    @ResponseBody
    public boolean validateUserName(String username){
        if(StringUtils.isBlank(username)){
            return false;
        }
        return userService.validateUserName(username);
    }

    @RequestMapping("/addInfo")
    @ResponseBody
    public Object addInfo(){
        userService.addInfo();
        return new Object();
    }
    @RequestMapping("/selectTest")
    @ResponseBody
    public Object selectTest(){
        userService.selectTest();
        return new Object();
    }
}
