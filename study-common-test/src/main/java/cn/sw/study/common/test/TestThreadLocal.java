package cn.sw.study.common.test;

/**
 * 测试线程局部变量
 * Created by shaowei on 2017/8/15.
 */
public class TestThreadLocal {
    private static ThreadLocal<Integer> threadLocal
            = new ThreadLocal<Integer>() {
        public Integer initialValue(){
            return 0;
        }
    };
    public int getNextNum(){
        threadLocal.set(threadLocal.get()+1);
        return threadLocal.get();
    }
    public static void main(String[] args){
        TestThreadLocal sn = new TestThreadLocal();
        new TestThread(sn).start();
        new TestThread(sn).start();
        new TestThread(sn).start();
    }
    private static class TestThread extends Thread {
        private TestThreadLocal tl;
        public TestThread(TestThreadLocal tl){
            this.tl = tl;
        }
        public void run(){
            for(int i=0;i<5;i++){
                System.out.println("Thread["+Thread.currentThread().getName()
                        +"]tl["+tl.getNextNum()+"]");
            }
        }
    }
}
