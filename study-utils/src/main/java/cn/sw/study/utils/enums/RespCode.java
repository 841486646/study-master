package cn.sw.study.utils.enums;

/**
 * 响应Code枚举.
 */
public enum RespCode {
    /** 成功. */
    SUCCESS("0", "成功"),

    /** 失败 */
    FAIL("-1", "失败"),

    /** 请求参数不正确. */
    REQ_PARAM_ERROR("101", "请求参数不正确"),

    /** 请求参数不正确. */
    REQ_PARAM_ERROR_WITH_ARGS("1011", "请求参数不正确[{0}]"),

    /** 请求参数验证失败. */
    REQ_PARAM_ANALYSE_ERROR("102", "请求参数验证失败"),

    /** 请求参数解码错误. */
    REQ_PARAM_DECODE_ERROR("103", "请求参数解码错误"),

    /** 非法访问. */
    REQ_NOT_ALLOWED("104", "非法访问"),

    /** 无此账号. */
    NO_ACCOUNT("105", "无此账号"),

    /** 发现重复账号. */
    DUPLICATE_ACCOUNT("106", "发现重复账号."),

    /** 无用户信息. */
    NO_USERINFO("107", "用户信息为空"),

    /** 账号已被禁用，请联系客服了解详情. */
    DISABLE_ACCOUNT("108", "账号已被禁用，请联系客服了解详情"),

    /** 帐号未登录. */
    USER_NOT_LOGIN("109", "未登录或已超时，请重新登录"),

    /** 用户名或密码错误. */
    USERNAME_PWD_ERR("110", "用户名或密码错误"),

    /** 用户已存在. */
    USER_EXIST("111", "用户已存在"),

    /** 角色已存在. */
    ROLE_EXIST("112", "角色已存在"),

    /** 数据已存在. */
    DATA_EXIST("113", "数据已存在"),

    /** 产品不存在. */
    PRODUCT_NOT_EXIST("114", "产品不存在"),

    /** 用户资金账户不存在. */
    USER_FUNDS_NOT_EXIST("115", "用户资金账户不存在"),
    /** 要平仓的单号已经平仓. */
    ORDER_IS_CLOSED("116", "该建仓单已被平仓"),

    /** 用户商品持仓为空. */
    USER_COMMODITYHOLD_EMPTY("117", "用户商品持仓为空"),

    /** 该商品已达到最大持仓量. */
    MAX_HOLD_COUNT("118", "该商品已达到最大持仓量"),

    /** 用户余额不足. */
    BALANCE_IS_ZERO("119", "用户余额不足"),

    /** 获取预设的止损点. */
    LOSS_PRICE("120", "获取预设的止损点发生异常"),

    /** 获取预设的止赢点发生异常. */
    WIN_PRICE("121", "获取预设的止赢点发生异常"),

    /** 用户处理冻结解冻数据统一方法（以用户为维度，针对于用户自己）. */
    HAND_USER_FREEZE_OR_UNFREEZE("122", "用户处理冻结解冻数据发生异常,以用户为维度，针对于用户自己"),

    /** 用户查询并锁用户账户发生异常. */
    FIND_AND_LOCK_USERBALANCE("123", "用户查询并锁用户账户发生异常"),

    /** 现在市场处于不能交易状态. */
    SYSTEM_STATUS("124", "现在市场处于不能交易状态"),

    /** 现在不是交易日. */
    TRADE_DATE("125", "现在不是交易日"),

    /** 会员风险率过高. */
    MEMBER_MARGIN_RATIO("126", "会员风险率过高"),

    /** 体验券不足. */
    TICKET_COUNT("127", "体验券不足"),

    /** 会员风险率未读取到. */
    MEMBER_MARGIN_RATIO_IS_NULL("128", "会员风险率未读取到"),

    /** 手续费比例未读取到. */
    BUILD_FEE_MARGIN_IS_NULL("128", "手续费比例未读取到"),

    /** 会员ID为空. */
    MEMBER_ID_EMPTY("129", "会员ID为空"),

    /** 会员资金帐号ID为空 */
    MEMBER_AMOUNT_ID_EMPTY("130", "会员资金帐号ID为空"),

    /** 会员编号为空 */
    MEMBER_CODE_EMPTY("131", "会员编号为空"),

    /** 交易员id为空 */
    AGENT_ID_EMPTY("132", "交易员id为空"),

    /** 会员余额不足 */
    MEMBER_ACTUAL_MINCASH("133", "会员余额不足"),

    /** 未获取到商品最新价格 */
    GET_COMMODITY_PRICE_ERR("134", "未获取到商品最新价格"),

    /** 商品code不能为空 */
    COMMODITY_CODE_EMPTY("135", "商品code不能为空"),

    /** 交易配置参数错误 */
    EXCHANGE_PARAM_SETTING_ERROR("136", "交易配置参数错误"),

    /** 查询会员资金账户信息失败 */
    QUERY_MEMBER_FUNDS_INFO_ERROR("137", "查询会员资金账户信息失败"),

    /** 未查询到体验券 */
    NO_TICKET("138", "未查询到体验券"),

    /** 未查询到体验券 */
    ACCOUNT_VERIFY_FAIL("139", "身份验证失败，您无权进行该操作"),

    /** 建仓失败 */
    OPEN_ORDER_FAIL("140", "下单失败"),

    /** 连接到短信平台网络异常，请重试. */
    MSG_CENTER_CONNECT_FAIL("141", "连接到短信平台网络异常，请重试"),

    /** 体验券使用异常 */
    TICKETS_USE_FAIL("142", "体验券使用失败"),

    /** 更新用户最大持仓发生异常 */
    UPDATE_HOLD_FAIL("143", "更新用户最大持仓操作失败"),

    /** 修改密码失败 */
    UPDATE_PWD_FAIL("144", "修改交易密码失败"),

    /** 密码验证失败 */
    VERIFY_PWD_FAIL("145", "密码交易验证失败"),

    /** 修改手机号码失败 */
    UPDATE_PHONE_FAIL("145", "修改手机号码失败"),

    /*
     * 系统错误
     */
    /** 数据库处理错误. */
    DB_ERROR("400", "数据库处理错误"),

    /** 未查询到数据. */
    DB_ERROR_NO_DATA("401", "未查询到数据"),

    /** 操作数据库影响行数错误. */
    DB_ERROR_EFFECT_LINE("402", "数据影响行数错误"),

    /** 操作数据库关联信息错误. */
    DB_ERROR_RELATION("403", "存在关联数据，不能删除"),

    /** 某用户已存在资金账户，不能新建资金账户*/
    DB_ERROR_CASH_ACCOUNT_EXIST("404", "资金账户已存在关联，不能新建资金账户"),

    /** 用户的手机号在数据库中不唯一，数据异常*/
    DB_USER_PHONE_REPEAT("405", "系统数据异常，系统存在手机号相同的用户"),

    NO_ALGORITHM("406", "系统无加密算法"),

    DB_DATA_ERROR("407", "数据库数据异常"),


    /** 服务端错误. */
    SERVER_ERROR("500", "服务端错误"),

    /** 业务异常. */
    SERVER_BIZ_ERROR("501", "业务异常"),

    NO_MEMBER_INFO("502", "系统无会员单位"),
    NO_AGENT_INFO("503", "该会员单位无交易员"),


    /** 业务异常. */
    SERVER_BUSY_ERROR("503", "系统忙请稍后再试"),
    BANK_CARD_EXIST("504","存在已绑定的银行卡"),
    NOT_REAL_NAME_CERTIFICATION("505","用户未实名认证"),
    PAY_PASSWORD_ERROR("506","交易密码错误"),
    USER_STATUS_ERROR("507","用户账户异常"),
    REGIST_CAPTCHA_ERROR("508","短信验证码错误"),
    /** 业务处理结果 不算异常*/
    PHONE_BIND_AGAIN("601", "手机号已绑定，请勿重复绑定"),
    PHONE_IS_USED("602", "手机号已被使用"),
    WEIXIN_ALREADY_BIND("603", "微信账号已注册"),
    WEIXIN_BIND_SUCCESS("604", "微信账号绑定手机号成功"),
    REACH_REGISTER_LIMIT("605", "已达该会员单位最大注册数"),
    WITHDRAWSCASH_MONEY_ERROR("606","提现金额必须大于2小于2万"),

    /**营销账户ID不存在*/
    RED_AMOUNT_ID_NOT_EXIST("701", "营销账户不存在"),

    /**会员账户ID不存在*/
    MEMBER_AMOUNT_ID_NOT_EXIST("702", "会员账户不存在"),

    /**客户账户ID不存在*/
    CUSTOMER_AMOUNT_ID_NOT_EXIST("703", "客户账户不存在"),

    /**营销账户状态异常*/
    RED_AMOUNT_STATUS_ERROR("704", "营销账户状态异常"),

    /**会员账户状态异常*/
    MEMBER_AMOUNT_STATUS_ERROR("705", "会员账户状态异常"),

    /**客户账户状态异常*/
    CUSTOMER_AMOUNT_STATUS_ERROR("707", "客户账户状态异常");

    /** 响应Code. */
    private String code;
    /** 响应消息. */
    private String msg;

    /**
     * 构造方法.
     * @param code 响应Code
     * @param msg 响应消息
     */
    RespCode(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    /**
     * 转换成字符串（Json格式）.
     */
    public String toString() {
        StringBuffer buf = new StringBuffer();
        buf.append("{");
        buf.append("\"code\":").append(code).append(",");
        buf.append("\"msg\":\"").append(msg).append("\"");
        buf.append("}");
        return buf.toString();
    }

    /**
     * 获得响应Code.
     * @return 响应Code
     */
    public String getCode() {
        return code;
    }

    /**
     * 获得响应消息.
     * @return 响应消息
     */
    public String getMsg() {
        return msg;
    }
}
