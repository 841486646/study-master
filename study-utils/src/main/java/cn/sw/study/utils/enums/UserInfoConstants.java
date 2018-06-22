package cn.sw.study.utils.enums;

/**
 * Created by H.CAAHN on 2016/12/1.
 */
public interface UserInfoConstants {
    /**
     * 用户状态：正常
     */
    String STATUS_NORMAL = "N";

    /**
     * 用户状态：注销
     */
    String STATUS_DEMISE = "D";

    /**
     * 用户状态：冻结
     */
    String STATUS_FROZEN = "F";

    /**
     * TODO 用户状态：激活（有疑问）
     */
    String STATUS_ACTIVATE = "A";

    /**
     * 用户未实名认证
     */
    String REAL_NAME_STATUS_NO = "N";

    /**
     * 用户已实名认证
     */
    String REAL_NAME_STATUS_YES = "Y";

    /**
     * 出入金流水，金额发生类型：入金
     */
    String MONEY_IN = "I";

    /**
     * 出入金流水，金额发生类型：出金
     */
    String MONEY_OUT = "O";

    /**
     * 用户资金流水，金额发生类型：平仓
     */
    String SERIAL_OPT_TYPE_C = "C";

    /**
     * 用户资金流水，金额发生类型：平仓手续费
     */
    String SERIAL_OPT_TYPE_CF = "CF";

    /**
     * 用户资金流水，金额发生类型：红包
     */
    String SERIAL_OPT_TYPE_R = "R";
}
