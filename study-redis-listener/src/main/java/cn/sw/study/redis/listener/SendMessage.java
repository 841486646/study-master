package cn.sw.study.redis.listener;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.io.Serializable;

/**
 * 消息发送者（生产者）
 * Created by shaowei on 2016/12/1.
 */
@Component
public class SendMessage {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    public void sendMessage(String channel, Serializable message) {
        redisTemplate.convertAndSend(channel, message);
    }
}
