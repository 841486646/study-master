package cn.sw.study.redis.listener;

import java.io.Serializable;

/**
 * 消息处理者（消费者）
 * Created by shaowei on 2016/12/1.
 */
public class ListenMessage {
    public void handleMessage(Serializable message){
        System.out.println("---------------------");
        System.out.println(message);
    }
}
