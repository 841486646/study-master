package cn.sw.study.common.test;

/**
 * wait是让使用wait方法的对象等待，暂时先把对象锁给让出来，给其它持有该锁的对象用，
 * 其它对象用完后再告知（notify）等待的那个对象可以继续执行了，因此，只有在synchronized块中才有意义
 * （否则，如果大家并不遵循同步机制，那还等谁呢？根本没人排队，也就谈不上等待和唤醒了）
 */
public class TestWait {

    public static void main(String[] args) throws InterruptedException {
        //wait notify 必须在同步中，否则报错Exception in thread "main" java.lang.IllegalMonitorStateException
        synchronized (TestWait.class) {
            TestWait.class.wait();
        }
    }
}
