package cn.sw.study.common.test;

import org.apache.curator.RetryPolicy;
import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.CuratorFrameworkFactory;
import org.apache.curator.framework.recipes.leader.LeaderSelector;
import org.apache.curator.framework.recipes.leader.LeaderSelectorListenerAdapter;
import org.apache.curator.retry.ExponentialBackoffRetry;
import org.junit.Test;

import java.io.IOException;

/**
 * Created by shaowei on 2016/12/9.
 */
public class LeaderSelectorTest {
    @Test
    public void testSimpleExample(){
        RetryPolicy retryPolicy = new ExponentialBackoffRetry(1000, 3);
        final CuratorFramework client = CuratorFrameworkFactory.builder().connectString("127.0.0.1:2181").sessionTimeoutMs(5000).connectionTimeoutMs(10000).retryPolicy(retryPolicy).namespace("text").build();
        client.start();

        final LeaderSelector leaderSelector = new LeaderSelector(client, "/led", new LeaderSelectorListenerAdapter(){

            @Override
            public void takeLeadership(CuratorFramework client) throws Exception {
                System.err.println("work ing...");
                Thread.currentThread().sleep(3000);
                System.err.println("end");
            }

        });
        leaderSelector.autoRequeue();
        leaderSelector.start();
        try {
            System.in.read();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
