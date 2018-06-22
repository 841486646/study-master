package cn.sw.study.utils.enums;

/**
 * 出入金Constants
 * Created by H.CAAHN on 2016/12/14.
 */
public interface CheckFundsConstants {
    /**
     * 出入金流水对账文件-状态：中心确认
     */
    int SEQ_STATUS_OK = 4;

    /**
     * 出入金流水对账文件-出入金类型：入金
     */
    int SEQ_FUND_TYPE_IN = 1;

    /**
     * 出入金流水对账文件-出入金类型：出金
     */
    int SEQ_FUND_TYPE_OUT = 0;

    /**
     * 出入金稽核数据库-状态：正常
     */
    String CHECK_STATUS_OK = "1";

    /**
     * 出入金稽核数据库-状态：待稽核
     */
    String CHECK_STATUS_NOCHECK = "2";

    /**
     * 出入金稽核数据库-状态：未匹配
     */
    String CHECK_STATUS_NOTFIND = "9";

    /**
     * 出入金稽核数据库-状态：稽核失败/不予处理
     */
    String CHECK_STATUS_FAIL = "0";

    /**
     * 出入金数据库表-出入金类型：入金
     */
    String USER_OPER_TYPE_IN = "I";

    /**
     * 出入金数据库表-出入金类型：出金
     */
    String USER_OPER_TYPE_OUT = "O";


    ////////////////////////////////////////////// 以ERROR_开头是出入金稽核结果

    /**
     * 缺少入金流水,苏登的入金流水正常状态
     *
     * @since 2016/12/21
     */
    String ERROR_USER_IN_NOHAS_NORMAL = "1";

    /**
     * 存在出金流水,未收到苏登回调,苏登出金流水状态正常
     *
     * @since 2016/12/21
     */
    String ERROR_USER_OUT_NOCALL_NORMAL = "2";

    /**
     * 存在出金流水,未收到苏登回调,苏登出金流水状态异常
     *
     * @since 2016/12/21
     */
    String ERROR_USER_OUT_NOCALL_NOTNORMAL = "3";

    /**
     * 存在出金流水,苏登不存在对应的出金流水记录
     *
     * @since 2016/12/21
     */
    String ERROR_USER_OUT_NOCALL_NOHAS = "4";

    /**
     * 不存在对应的入金流水,苏登的入金流水正常状态
     *
     * @since 2016/12/21
     */
    String ERROR_MEMBER_IN_NOHAS_NORMAL = "5";

    /**
     * 存在出金流水,未收到苏登回调,苏登出金流水状态正常
     *
     * @since 2016/12/21
     */
    String ERROR_MEMBER_OUT_NOCALL_NORMAL = "6";

    /**
     * 存在出金流水,未收到苏登回调,苏登出金流水状态异常
     *
     * @since 2016/12/21
     */
    String ERROR_MEMBER_OUT_NOCALL_NOTNORMAL = "7";

    /**
     * 不存在对应的入金流水,苏登的入金流水正常状态
     *
     * @since 2016/12/21
     */
    String ERROR_EXCHANGE_IN_NOHAS_NORMAL = "8";

    /**
     * 存在出金流水,未收到苏登回调,苏登出金流水状态正常
     *
     * @since 2016/12/21
     */
    String ERROR_EXCHANGE_OUT_NOCALL_NORMAL = "9";

    /**
     * 存在出金流水,未收到苏登回调,苏登出金流水状态异常
     *
     * @since 2016/12/21
     */
    String ERROR_EXCHANGE_OUT_NOCALL_NOTNORMAL = "10";


    /**
     * 微盘系统存在红包流水记录,但苏登无对应的红包流水记录
     *
     * @since 2016/12/23
     */
    String ERROR_RED_NORMAL_NOHAS = "11";

    /**
     * 微盘系统存在红包流水记录,但苏登对应的红包流水记录状态异常
     *
     * @since 2016/12/23
     */
    String ERROR_RED_NORMAL_NOTNORMAL = "12";


}
