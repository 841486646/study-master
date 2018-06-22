package cn.sw.study.web.filter;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.apache.commons.lang3.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletWebRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.reflect.Method;
import java.util.Collection;
import java.util.Enumeration;

/**
 * 打印日志
 */
public class MethodLogInterceptor implements MethodInterceptor {
    private final Logger logger = LogManager.getLogger(getClass());

    /**
     * 拦截
     *
     * @param invocation method proxy invocation
     * @return invoke result
     * @throws Throwable
     */
    public Object invoke(MethodInvocation invocation) throws Throwable {
        long startTime = System.currentTimeMillis();
        try {
            Object result = invocation.proceed();
            logMethod(startTime, invocation, null);
            return result;
        } catch (Throwable throwable) {
            logMethod(startTime, invocation, throwable);
            throw throwable;
        }
    }

    private void logMethod(long startTime, MethodInvocation invocation, Throwable e) {
        Method invocationMethod = invocation.getMethod();
        Class parameterTypes[] = invocationMethod.getParameterTypes();
        Object[] arguments = invocation.getArguments();
        String methodName = invocation.getMethod().getName();
        StringBuilder stringBuilder = new StringBuilder(100);
        stringBuilder.append("#").append(methodName).append("#Parameters=[");
        for (int i = 0, l = arguments.length; i < l; i++) {
            Class parameterType = parameterTypes[i];
            Object v = arguments[i];
            if (parameterType.isAssignableFrom(HttpServletResponse.class)) {
                continue;
            }
            if (parameterType.isAssignableFrom(HttpServletRequest.class)) {
                HttpServletRequest request = (HttpServletRequest) v;
                Enumeration enumeration = request.getParameterNames();
                while (enumeration.hasMoreElements()) {
                    String key = enumeration.nextElement().toString();
                    stringBuilder.append("{ ").append(key).append(" = ").append(request.getParameter(key).toString()).append("}");
                }
                continue;
            }
            if (parameterType.isAssignableFrom(Collection.class)) {
                stringBuilder.append("{ index=").append(i).append(" value=[").append(StringUtils.join((Collection) v, ",")).append("]}");
                continue;
            }
            stringBuilder.append("{ index=").append(i).append(" value=").append(v.toString()).append("}");
            if (i != l - 1) {
                stringBuilder.append(",");
            }
        }

        stringBuilder.append("] elapseTime=").append(System.currentTimeMillis() - startTime).append(" ms");
        if (e == null) {
            logger.info(stringBuilder.toString());
        } else {
            logger.error(stringBuilder.toString(), e);
        }

    }

    @SuppressWarnings("unused")
    private String getClientAddress() {
        ServletWebRequest webRequest = (ServletWebRequest) RequestContextHolder.getRequestAttributes();
        if (webRequest == null)
            return "0.0.0.0";
        else
            return webRequest.getRequest().getRemoteAddr();
    }
}
