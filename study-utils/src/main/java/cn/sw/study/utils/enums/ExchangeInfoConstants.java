package cn.sw.study.utils.enums;

/**
 * 交易所常量
 * Created by H.CAAHN on 2016/11/29.
 */
public interface ExchangeInfoConstants {
    /**
     * 交易市场状态：有效
     */
    String STATUS_VALID = "Y";

    /**
     * 交易市场状态：无效
     */
    String STATUS_INVALID = "N";

    /**
     * 交易市场状态：资金帐号未审核
     */
    String STATUS_NOAUDIT = "2";

    /**
     * 交易所收益账户流水类型：用户建仓手续费
     */
    String FEE_TYPE_FEE = "EF";

    /**
     * 交易所收益账户流水类型：会员单位返佣（一级返佣）
     */
    String FEE_TYPE_REBATE = "ER";

    /**
     * 交易所收益账户流水类型：推荐返佣（二级返佣）
     */
    String FEE_TYPE_RECOMM_REBATE = "RC";

    /**
     * 交易所收益账户流水类型：运营中心返佣
     */
    String FEE_TYPE_MARKET = "CR";

    /**
     * 交易市场红包账户流水类型：红包（会员单位营销成本分担）
     */
    String SERIAL_TYPE_RED = "R";

    /**
     * 交易市场红包账户流水类型：红包（直接划拨给用户）
     */
    String SERIAL_TYPE_OUT_RED = "EP";

    /**
     * 交易市场红包账户流水类型：营销帐号入金
     */
    String SERIAL_TYPE_IN_MONEY = "I";

    /**
     * 交易市场红包账户流水类型：营销帐号出金
     */
    String SERIAL_TYPE_OUT_MONEY = "O";
}
