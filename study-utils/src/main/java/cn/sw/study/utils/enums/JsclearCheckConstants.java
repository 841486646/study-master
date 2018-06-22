package cn.sw.study.utils.enums;

/**
 * Created by H.CAAHN on 2016/12/17.
 */
public interface JsclearCheckConstants {
    /**
     * 资金稽核结果（总表）状态：正常
     */
    String RESULT_SUCCESS = "Y";

    /**
     * 资金稽核结果（总表）状态：处理中
     */
    String RESULT_PROCING = "P";

    /**
     * 资金稽核结果（总表）状态：等待文件下发
     */
    String RESULT_WAITING = "W";

    /**
     * 资金稽核结果（总表）状态：失败
     */
    String RESULT_FAILURE = "F";

    /**
     * 状态：成功
     */
    String ITEM_STATUS_SUCCESS = "Y";

    /**
     * 状态：待处理（失败）
     */
    String ITEM_STATUS_PENDING = "C";

    /**
     * 状态：已处理
     */
    String ITEM_STATUS_PROCESSED = "YJ";
}
