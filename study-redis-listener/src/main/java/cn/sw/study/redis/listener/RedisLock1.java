package cn.sw.study.redis.listener;

import org.springframework.data.redis.core.RedisCallback;
import org.springframework.data.redis.core.RedisTemplate;
import redis.clients.jedis.Jedis;

/**
 * redis锁
 */
@SuppressWarnings("rawtypes")
public class RedisLock1 {

    RedisTemplate redisTemplate;
    Jedis jedis;
    String lockKey;
    long timeoutMsecs = 20 * 1000;
    long expireMsecs = 15 * 1000;
    boolean locked;

    public RedisLock1(RedisTemplate redisTemplate, String lockKey) {
        this.locked = false;
        this.redisTemplate = redisTemplate;
        this.lockKey = lockKey;
    }

    public RedisLock1(RedisTemplate redisTemplate, String lockKey, int timeoutMsecs, int expireMsecs) {
        this(redisTemplate, lockKey);
        this.timeoutMsecs = timeoutMsecs;
        this.expireMsecs = expireMsecs;
    }

    public String getLockKey() {
        return this.lockKey;
    }


    public synchronized boolean acquire() throws InterruptedException {
        long timeout = this.timeoutMsecs;
        while (timeout >= 0) {
            boolean result = (boolean)redisTemplate.execute((RedisCallback<Boolean>) connection -> {
                String code = ((Jedis) connection.getNativeConnection()).set(lockKey, "L", "NX", "PX", expireMsecs);
                if ("OK".equals(code)) {
                    System.out.println("--ok--");
                    this.locked = true;
                    return true;
                }else{
                    return false;
                }
            });
            if(result == true){
                return true;
            }
            timeout -= 100;
            Thread.sleep(100L);
        }
        return false;
    }

    public synchronized void release() {
        if(locked) {
            redisTemplate.delete(lockKey);
            locked = false;
        }
    }

}
