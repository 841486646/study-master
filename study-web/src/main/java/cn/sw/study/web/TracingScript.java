package cn.sw.study.web;

import com.sun.btrace.annotations.*;
import static com.sun.btrace.BTraceUtils.*;

@BTrace
public class TracingScript {
    @TLS private static long startTime = 0;
    @OnMethod(
            clazz="cn.datai.minitrade.core.trade.job.MemberRiskJob",
            method="execute"
    )
    public static void startExecute(){
        startTime = timeNanos();
    }

    @OnMethod(
            clazz="cn.datai.minitrade.core.trade.job.MemberRiskJob",
            method="execute",
            location=@Location(Kind.RETURN)
    )
    public static void endExecute(){
        long time = timeNanos() - startTime;
        println(strcat("execute1 time(nanos): ", str(time)));
    }
}
