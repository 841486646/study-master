package cn.sw.study.redis.listener;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.Date;
import java.util.Random;
import java.util.concurrent.Callable;
import java.util.concurrent.Executors;

/**
 * Created by shaowei on 2016/12/1.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:applicationContext.xml")
public class RedisTest {
    @Autowired
    SendMessage sendMessage;
    @Autowired
    StringRedisTemplate stringRedisTemplate;
    @Autowired
    RedisTemplate redisTemplate;

    @Test
    public void testPutOne() throws InterruptedException {
        redisTemplate.opsForValue().set("testKey", "testValue");
        String testValue = (String)redisTemplate.opsForValue().get("testKey");
        Assert.assertEquals(testValue, "testValue");
    }

    @Test
    public void testSendMessage() throws InterruptedException {
        sendMessage.sendMessage("testSendMessage", "one message");
        Thread.sleep(3000);
    }

    @Test
    public void testProvider() throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            Executors.newCachedThreadPool().submit(new Callable() {
                @Override
                public Object call() throws Exception {
                    for (int j = 0; j < 10; j++) {
                        stringRedisTemplate.opsForList().leftPush("testProvider",
                                "message" + Thread.currentThread().getName() + j);
                    }
                    return null;
                }
            });
        }
        Thread.sleep(3000);
    }

    @Test
    public void testConsumer() throws InterruptedException {
        String testConsumerLock = "testConsumerLock";
        Random random = new Random();
        RedisLock1 rlock = new RedisLock1(redisTemplate, testConsumerLock, 3000, 4000);
        System.out.println("-------------");
        for (int i = 0; i < 10; i++) {
            Executors.newCachedThreadPool().submit(new Callable() {
                @Override
                public Object call() throws Exception {
                    while (true) {
                        try {
                            String str = (String) stringRedisTemplate.opsForList().rightPop("testProvider");
                            if (str != null) {
                                synchronized (rlock) {
                                    rlock.acquire();
                                    Thread.sleep(random.nextInt(10));
                                    System.out.println(str + new Date());
                                    rlock.release();
                                }
                            }
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }
            });
        }
        Thread.sleep(1000000);
    }

    @Test
    public void testRedisLockCon() throws InterruptedException {
        String testConsumerLock = "testRedisLockCon";
        Random random = new Random();
        for (int i = 0; i < 10; i++) {
            Executors.newCachedThreadPool().submit(new Callable() {
                @Override
                public Object call() throws Exception {
                    for(int j=0;j<10;j++){
                        RedisLock rlock = new RedisLock(redisTemplate, testConsumerLock, 9000, 10000);
                        boolean result = rlock.acquire();
                        Thread.sleep(random.nextInt(10));
//                        Thread.sleep(3000);
                        System.out.println("---"+ result + new Date());
                        rlock.release();
                    }
                    return null;
                }
            });
        }
        Thread.sleep(1000000);
    }
}
