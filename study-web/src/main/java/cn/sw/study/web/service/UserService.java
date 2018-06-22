package cn.sw.study.web.service;

/**
 * Created by shaowei on 2017/4/26.
 */
public interface UserService {
    void addInfo();
    void selectTest();

    /**
     * 查数据库，检查输入的用户名是否已经存在
     * @param username 用户名
     * @return 如果数据库中存在输入的用户名则返回false，否则返回true
     */
    boolean validateUserName(String username);
}
