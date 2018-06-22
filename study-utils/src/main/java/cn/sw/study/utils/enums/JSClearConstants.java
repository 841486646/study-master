package cn.sw.study.utils.enums;

/**
 * 结算参数
 * Created by H.CAAHN on 2016/12/2.
 */
public interface JSClearConstants {
    /**
     * 币种
     */
    int CURRENCY_CNY = 156;

    /**
     * 币种String
     */
    String CURRENCY_CNY_STRING = "156";

    /**
     * 开仓手续费
     */
    int FUNDS_TYPE_FEE = 1;

    /**
     * 转让盈亏
     */
    int FUNDS_TYPE_PROFIT_LOSS = 7;

    /**
     * 出金
     */
    int FUNDS_TYPE_OUT_MONEY = 20;

    /**
     * 入金
     */
    int FUNDS_TYPE_IN_MONEY = 21;

    /**
     * 返佣
     */
    int FUNDS_TYPE_REBATE = 33;

    /**
     * 其他费用
     */
    int FUNDS_TYPE_OTHER = 35;

    /**
     * 可用资金
     */
    int FUNDS_TYPE_BALANCE = 36;

    /**
     * 静态总权益
     */
    int FUNDS_TYPE_STATIC_TOTAL_EQUITY = 38;

    /**
     * 场所收入
     */
    int FUNDS_TYPE_EXCHANGE_INCOME = 100;

    /**
     * 交易状态-成功
     */
    String TRADE_SUCC = "0000";

    /**
     * 交易状态-失败
     */
    String TRADE_FAIL = "-1";

    /**
     * 系统交易员
     */
    String OPERATOR_SYS = "SYS";
}
