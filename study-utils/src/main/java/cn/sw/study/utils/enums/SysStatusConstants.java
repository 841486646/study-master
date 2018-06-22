package cn.sw.study.utils.enums;

/**
 * 系统状态常量
 * Created by H.CAAHN on 2016/11/28.
 */
public interface SysStatusConstants {
    /**
     * 系统状态：开市中
     */
    int STATUS_OPENING = 0;

    /**
     * 系统状态：正常
     */
    int STATUS_NORMAL = 1;

    /**
     * 系统状态：开始休市
     */
    int STATUS_CLOSING = 2;

    /**
     * 系统状态：系统结算中
     */
    int STATUS_BALANCING = 3;

    /**
     * 系统状态：交易暂停
     */
    int STATUS_SUSPEND = 5;

    /**
     * 系统状态：已正常休市
     */
    int STATUS_CLOSED = -1;

    /**
     * 系统状态：已休市，但最终未成功完成所有操作
     */
    int STATUS_CLOSED_FAILED = -2;

    /**
     * 系统状态：开市失败
     */
    int STATUS_OPEN_FAILED = -9;

    /**
     * 系统状态：未知
     */
    int STATUS_UNKNOWN = -999;

    /**
     * 初始化
     */
    int PROC_INIT = 0;

    /**
     * 待处理
     */
    int PROC_WAITING = 1;

    /**
     * 处理进行中
     */
    int PROC_PROCESSING = 2;

    /**
     * 处理失败
     */
    int PROC_FAILURE = -1;

    /**
     * 已完成
     */
    int PROC_FINISHED = 9;

    /**
     * 业务正常
     *
     * @since 2016/12/21
     */
    int PROC_BIZ_SUCCESS = 10;
    /**
     * 业务异常
     *
     * @since 2016/12/21
     */
    int PROC_BIZ_FAIL = 11;

    /**
     * 开市步骤<br/>
     * 加载配置参数进度
     */
    String O_LOAD_ARGS = "O_LOAD_ARGS";

    /**
     * 开市步骤<br/>
     * 苏登签到处理进度
     */
    String O_EXCHANGE_IN = "O_EXCHANGE_IN";

    /**
     * 闭市/结算步骤：<br/>
     * 关闭订单的处理进度（闭市强平，返还手续费）
     */
    String B_CLOSE_ORDER = "B_CLOSE_ORDER";

    /**
     * 闭市/结算步骤：<br/>
     * 系统内部交易对账
     */
    String B_INNER_BALANCE = "B_INNER_BALANCE";

    /**
     * 闭市/结算步骤：<br/>
     * 交易所签退
     */
    String B_EXCHANGE_OUT = "B_EXCHANGE_OUT";

    /**
     * 闭市/结算步骤：<br/>
     * 获取出入金流水对账文件
     */
    String B_GET_FUNDS_SEQ = "B_GET_FUNDS_SEQ";

    /**
     * 闭市/结算步骤：<br/>
     * 检查出入金流水对账文件
     */
    String B_CHK_FUNDS_SEQ = "B_CHK_FUNDS_SEQ";

    /**
     * 闭市/结算步骤：<br/>
     * 生成资金稽核文件
     */
    String B_GENERATE_FILE = "B_GENERATE_FILE";

    /**
     * 闭市/结算步骤：<br/>
     * 发送资金稽核文件
     */
    String B_SEND_FILE = "B_SEND_FILE";

    /**
     * 闭市/结算步骤：<br/>
     * 检查资金稽核文件
     */
    String B_CHECK_FILE = "B_CHECK_FILE";

    /**
     * 闭市/结算步骤：<br/>
     * 数据迁移到历史表
     */
    String B_DATA_MIGRATE = "B_DATA_MIGRATE";

    /**
     * trade_day_info表中
     */
    String FORMAT_TRADEDAY_TIME = "yyyyMMddHHmmss";
}
