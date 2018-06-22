package cn.sw.study.utils.enums;

/**
 * 会员单位常量
 * Created by H.CAAHN on 2016/11/28.
 */
public interface MemberInfoConstants {
    /**
     * 会员单位状态：有效
     */
    String STATUS_VALID = "1";

    /**
     * 会员单位状态：无效
     */
    String STATUS_INVALID = "N";

    /**
     * 是否是运营中心：是
     */
    String OPERATION_CENTER_YES = "Y";

    /**
     * 是否是运营中心：否
     */
    String OPERATION_CENTER_NO = "N";

    /**
     * 会员单位资金流水类型：平仓
     */
    String SERIAL_TYPE_CLOSE = "C";

    /**
     * 会员单位资金流水类型：返佣(一级返佣)
     */
    String SERIAL_TYPE_REBATE = "ER";

    /**
     * 会员单位资金流水类型：推荐返佣(二级返佣)
     */
    String SERIAL_TYPE_RECOMM_REBATE = "RC";

    /**
     * 会员单位资金流水类型：运营中心返佣
     */
    String SERIAL_TYPE_MARKET = "EP";

    /**
     * 会员单位资金流水类型：红包费用（营销成本分摊）
     */
    String SERIAL_TYPE_RED = "R";

    /**
     * 会员资金账户状态-正常
     */
    String FUNDS_ACCOUNT_STATUS_OK = "Y";

    /**
     * 会员资金账户状态-非正常
     */
    String FUNDS_ACCOUNT_STATUS_NO = "N";

    /**
     * 出入金流水，金额发生类型：入金
     */
    String MONEY_IN = "I";

    /**
     * 出入金流水，金额发生类型：出金
     */
    String MONEY_OUT = "O";
}
