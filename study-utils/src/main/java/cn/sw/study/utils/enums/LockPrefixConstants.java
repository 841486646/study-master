package cn.sw.study.utils.enums;

/**
 * Created by zhangyutao on 2016/12/7.
 */
public interface LockPrefixConstants {

    /** redis锁命名空间*/
    String REDIS_LOCK = "lock";

    /** 交易所命名空间*/
    String EXCHANGE = "exchange";

    /** 会员单位命名空间*/
    String MEMBER = "member";

    /** 用户命名空间*/
    String USER = "user";



    /** 手机号锁*/
    String PHONE = REDIS_LOCK + ":" + USER + ":" + "phone_";

    /** 微信openid*/
    String OPENID = REDIS_LOCK + ":" + USER + ":" + "openid_";

    /** 建仓*/
    String BUILD = REDIS_LOCK + ":" + USER + ":" + "build_";

    /** 平仓*/
    String CLOSE = REDIS_LOCK + ":" + USER + ":" + "close_";

}
