package cn.sw.study.utils.enums;

/**
 * 对应的数据库表（参数 设置表中的所有的key）
 * Created by H.CAAHN on 2016/11/30.
 */
public interface ExchangeParamConstants {
    /**
     * 会员单位返佣比例：86%
     */
    String MEMBER_RETURN_RATIO = "MEMBER_RETURN_RATIO";
    /**
     * 会员单位二级返佣比例：2%
     */
    String MEMBER_SECONDARY_RETURN_RATIO = "MEMBER_SECONDARY_RETURN_RATIO";
    /**
     * 运营中心返佣比例：4%
     */
    String OPERATING_CENTER_RETURN_RATIO = "OPERATING_CENTER_RETURN_RATIO";
    /**
     * 会员单位保证金比例：20%（期初）
     */
    String MEMBER_DEPOSIT_RATIO = "MEMBER_DEPOSIT_RATIO";
    /**
     * 会员单位最低保证金：100000元
     */
    String MEMBER_LEAST_DEPOSIT = "MEMBER_LEAST_DEPOSIT";
    /**
     * 会员单位对手单冻结比例：20%
     */
    String MEMBER_OPPONENT_FROZEN_RATIO = "MEMBER_OPPONENT_FROZEN_RATIO";
    /**
     * 风险率比例：40%
     */
    String RISK_RATIO = "RISK_RATIO";
    /**
     * 用户日入金限制：20000元
     */
    String USER_DAY_IN_LIMIT = "USER_DAY_IN_LIMIT";
    /**
     * 用户最大净入金限制：50000元
     */
    String USER_NET_IN_LIMIT = "USER_NET_IN_LIMIT";
    /**
     * 用户日出金限制：20000元
     */
    String USER_DAY_OUT_LIMIT = "USER_DAY_OUT_LIMIT";
    /**
     * 建仓手续费比例：15%
     */
    String BUILD_CHARGE_RATIO = "BUILD_CHARGE_RATIO";
    /**
     * 提现手续费限制：2元
     */
    String WITHDRAW_CHARGE_LIMIT = "WITHDRAW_CHARGE_LIMIT";
    /**
     * 会员单位营销成本比例：50%
     */
    String MEMBER_COST_RATIO = "MEMBER_COST_RATIO";
    /**
     * 交易所准备开市时间：07:30
     */
    String EXCHANGE_PREPARE_START_TIME = "EXCHANGE_PREPARE_START_TIME";
    /**
     * 交易所休市时间：04:00
     */
    String EXCHANGE_END_TIME = "EXCHANGE_END_TIME";
    /**
     * 会员单位出金开始时间：09:00
     */
    String MEMBER_CASH_OUT_START_TIME = "MEMBER_CASH_OUT_START_TIME";
    /**
     * 会员单位出金结束时间：16:00
     */
    String MEMBER_CASH_OUT_END_TIME = "MEMBER_CASH_OUT_END_TIME";
    /**
     * 会员单位入金开始时间：08:00
     */
    String MEMBER_CASH_IN_START_TIME = "MEMBER_CASH_IN_START_TIME";
    /**
     * 会员单位入金结束时间：18:00
     */
    String MEMBER_CASH_IN_END_TIME = "MEMBER_CASH_IN_END_TIME";
    /**
     * 用户出金开始时间：08:00
     */
    String USER_CASH_OUT_START_TIME = "USER_CASH_OUT_START_TIME";
    /**
     * 用户出金结束时间：22:30
     */
    String USER_CASH_OUT_END_TIME = "USER_CASH_OUT_END_TIME";
    /**
     * 用户入金开始时间：08:00
     */
    String USER_CASH_IN_START_TIME = "USER_CASH_IN_START_TIME";
    /**
     * 用户入金结束时间：22:30
     */
    String USER_CASH_IN_END_TIME = "USER_CASH_IN_END_TIME";
    /**
     * 用户入金手续费比例：0.6%
     */
    String USER_CASH_IN_CHARGE_RATIO = "USER_CASH_IN_CHARGE_RATIO";

    /**
     * 会员单位当前可用资金:20000
     */
    String MEMBER_CURRENT_AVAILABLE_FUND = "MEMBER_CURRENT_AVAILABLE_FUND";

    /**
     * 每个会员单位最大注册用户量，-1表示不限制
     */
    String MEMBER_MAX_REGISTER = "MEMBER_MAX_REGISTER";



    /**************** 以下常量不记录到数据库 *****************/
    /**
     * 交易市场暂停时间
     */
    String EXCHANGE_SUSPEND_AT = "EXCHANGE_SUSPEND_AT";

    /**
     * 交易市场恢复时间
     */
    String EXCHANGE_RESUME_AT = "EXCHANGE_RESUME_AT";
}
