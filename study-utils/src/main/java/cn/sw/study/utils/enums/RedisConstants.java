package cn.sw.study.utils.enums;

/**
 * Redis key参数
 * Created by Administrator on 2016/11/28.
 */
public interface RedisConstants {

    /**
     * 系统状态
     */
    String SYSTEM_STATUS = "SYSTEM_STATUS";

    /**
     * 结算状态
     */
    String SYSTEM_BALANCE = "SYSTEM_BALANCE";

    /**
     * 交易日，redis保存的是字符串
     */
    String TRADE_DATE = "TRADE_DATE";

    /**
     * 商品列表
     */
    String COMMODITY_LIST = "COMMODITY_LIST";

    /**
     * 产品列表
     */
    String PRODUCT_LIST = "PRODUCT_LIST";

    /**
     * 会员单位信息Map，以memberId为key值
     */
    String MEMBER_MAP = "MEMBER_MAP";

    /**
     * 会员单位信息Map，以amountId为key值
     */
    String MEMBER_AMOUNT_MAP = "MEMBER_AMOUNT_MAP";

    /**
     * 会员单位信息Map，以memberCode为key值
     */
    String MEMBER_CODE_MAP = "MEMBER_CODE_MAP";

    /**
     * 会员单位信息列表，该列表中仅存储会员单位ID和会员单位名称<br/>
     * 其所属类为cn.sw.study.persist.vo.Option<br/>
     * 其中key值为memberId，value值为memberName
     */
    String MEMBER_LIST = "MEMBER_LIST";

    /**
     * 交易所信息
     */
    String EXCHANGE_INFO = "EXCHANGE_INFO";

    /**
     * 交易市场配置参数
     */
    String EXCHANGE_ARGS = "EXCHANGE_ARGS";

    /**
     * 建仓单号
     */
   String BUILD_ORDER_ID = "BUILD_ORDER_ID";

    /**
     * 平仓单号
     */
    String CLOSE_ORDER_ID = "CLOSE_ORDER_ID";

    /**
     * 定时平仓时，符合条件的订单信息存放的redis队列的key
     */
    String QUEUE_CLOSEABLE_ORDER = "QUEUE_CLOSEABLE_ORDER";
    /**
     * 定时平仓时，符合条件的订单信息ID存放的redis中SET
     */
    String QUEUE_CLOSEABLE_ORDER_SETKEY = "QUEUE_CLOSEABLE_ORDER_SETKEY";

    /**
     * 交易时间
     */
    String TRADE_TIME_INFO = "TRADE_TIME_INFO";

    /**
     * 用户余额
     */
    String USER_BALANCE = "USER_BALANCE";

    /**
     *用户商品持仓数量
     */
    String USER_HOLD_NUM = "USER_HOLD_NUM";

    /**
     * 体验券
     */
    String TICKET_INFO = "_TICKET_INFO";

    /**
     * 建仓
     */
    String HOLD_BUILD_INFO = "_HOLD_BUILD_INFO";

    /**
     * 平仓
     */
    String HOLD_CLOSE_INFO = "_HOLD_CLOSE_INFO";


    /**
     * 手机号与用户id关系 key:手机号  value:用户id
     */
    String PHONE_USER_ID = "PHONE_USER_ID";

    /**
     * 会员单位可用资金
     */
    String MEMBER_ACTUAL_MINCASH = "MEMBER_ACTUAL_MINCASH";

    /**
     * 会员单位期初最低保证金
     */
    String MEMBER_BEGIN_MINCASH = "MEMBER_MARGIN_RATIO";

    /**
     * 会员单位风险率
     */
    String MEMBER_RISK_RATIO = "MEMBER_RISK_RATIO";
    /**
     * 会员单位风险参数信息
     */
    String MEMBER_RISK_INFO = "MEMBER_RISK_INFO";

    /**
     * 用户信息
     */
    String USER_INFO = "USER_INFO";

    /**
     * 用户最近一次登录时间
     */
    String LAST_LOGIN_TIME = "LAST_LOGIN_TIME";

    /**
     * 苏登回应的数据
     */
    String JSCLEAR_SIMPLE = "JSCLEAR_SIMPLE";
}
