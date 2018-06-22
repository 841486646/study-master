package cn.sw.study.common.test;

import com.alibaba.fastjson.JSON;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpStatus;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.AllowAllHostnameVerifier;
import org.apache.http.conn.ssl.SSLContextBuilder;
import org.apache.http.conn.ssl.TrustStrategy;
import org.apache.http.entity.ByteArrayEntity;
import org.apache.http.entity.ContentType;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import java.io.ByteArrayOutputStream;
import java.nio.charset.Charset;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.zip.GZIPOutputStream;

public class TestRemoteLog {
    private static final int BUFFER_SIZE = 1000;

    private List<RemoteLog> remoteLogList = new ArrayList<>(BUFFER_SIZE * 2);

    private ScheduledExecutorService pool = Executors.newSingleThreadScheduledExecutor();

//    private static String logURL = "http://127.0.0.1:8080/study-web/test/log";
    private static String logURL = "https://analysis.jsdttec.com/server/upload";

    private static String str = "qqqqqqqqqqqqqqqqqqqeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrtre" +
            "rerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr343rrrrrrrrrrrrrr" +
            "3444444444444444444444444444444444444444444444444444444444444443333333333355555555555tt" +
            "rrrrrrrrrrrrrrrrrrrrrrrrr34444444444444444444444444444444444444444444444444444444444434" +
            "r233333333333333333333ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggrtrtr" +
            "344444444444ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt";

    public static void main(String[] args) {
        TestRemoteLog remoteLog = new TestRemoteLog();

//        for (int i = 0; i < 100000000; i++) {
//            RemoteLog log = new RemoteLog();
//            log.setCname(System.currentTimeMillis() + str);
//            remoteLog.log(log);
//            if (i % 100000 == 0) {
//                try {
//                    Thread.sleep(3000);
//                    System.out.println("sleep 3000............");
//                } catch (InterruptedException e) {
//                    e.printStackTrace();
//                }
//            }
//        }

        System.out.println("start ..");
        long starTime = System.currentTimeMillis();
        try {
            remoteLog.sendHttp(logURL, str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        long endTime=System.currentTimeMillis();
        long time=endTime-starTime;
        System.out.println(time);
    }

    public void log(RemoteLog log) {
        String message = "";
        synchronized (this) {
            remoteLogList.add(log);
            if (remoteLogList.size() > BUFFER_SIZE) {
                message = JSON.toJSONString(remoteLogList);
                remoteLogList.clear();
            }
        }

        if (StringUtils.isNotEmpty(message)) {
            final String toSend = message;
            pool.schedule(new Runnable() {
                @Override
                public void run() {
                    sendLog(toSend);
                }
            }, 10, TimeUnit.MILLISECONDS);
        }
    }

    private void sendLog(String message) {
//        try {
//            sendHttp(logURL, message);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
        try {
            Thread.sleep(3000);
            System.out.println("sendLog sleep 3000............");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    private void sendHttp(String url, String message) throws Exception {
        if (StringUtils.isBlank(message)) {
            return;
        }

        CloseableHttpClient httpClient = HttpClients.custom()
                .setHostnameVerifier(new AllowAllHostnameVerifier())
                .setSslcontext(
                        new SSLContextBuilder().loadTrustMaterial(null,
                                new TrustStrategy() {
                                    @Override
                                    public boolean isTrusted(X509Certificate[] arg0, String arg1) throws CertificateException {
                                        return true;
                                    }
                                }
                        ).build()).build();
        // 设置请求各超时时间
//        RequestConfig rc = RequestConfig.custom()
//                // 请求连接时间  默认3秒
//                .setConnectTimeout(3000)
//                // 数据传输时间 默认3秒
//                .setSocketTimeout(3000)
//                // 连接管理器超时时间 0:无限;-1:未定义
//                .setConnectionRequestTimeout(6000)
//                .build();
        try {

            HttpPost postMethod = new HttpPost(url);
//            postMethod.setConfig(rc);
            postMethod.setHeader("Accept", "application/json");
            postMethod.setHeader("Content-Encoding", "gzip");

            ByteArrayOutputStream originalContent = new ByteArrayOutputStream();
            originalContent.write(message.getBytes(Charset.forName("UTF-8")));

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            GZIPOutputStream gzipOut = new GZIPOutputStream(baos);
            originalContent.writeTo(gzipOut);
            gzipOut.finish();
            ByteArrayEntity entity = new ByteArrayEntity(baos.toByteArray(),
                    ContentType.create("text/plain; charset=utf-8"));
            entity.setChunked(true);
            postMethod.setEntity(entity);

            // int retry = 0;
            // do {
            CloseableHttpResponse response = null;
            try {
                response = httpClient.execute(postMethod);
                if (HttpStatus.SC_OK == response.getStatusLine().getStatusCode()) {
                    return;
                }
            } finally {
                if (response != null)
                    response.close();
            }

            // } while (retry++ < 3);
        } finally {
            if (httpClient != null)
                httpClient.close();
        }

    }

    public static class RemoteLog {
        private String cname = "";
        private String tname = "";
        private String sid = "";
        private String rid = "";
        private String url = "";
        private String param = "";
        private long startTime;
        private long endTime;
        private String exceptionCode = "";
        private String exceptionDescription = "";
        private String exceptionDetail = "";

        public String getCname() {
            return cname;
        }

        public void setCname(String cname) {
            this.cname = cname;
        }

        public String getTname() {
            return tname;
        }

        public void setTname(String tname) {
            this.tname = tname;
        }

        public String getSid() {
            return sid;
        }

        public void setSid(String sid) {
            this.sid = sid;
        }

        public String getRid() {
            return rid;
        }

        public void setRid(String rid) {
            this.rid = rid;
        }

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getParam() {
            return param;
        }

        public void setParam(String param) {
            this.param = param;
        }

        public long getStartTime() {
            return startTime;
        }

        public void setStartTime(long startTime) {
            this.startTime = startTime;
        }

        public long getEndTime() {
            return endTime;
        }

        public void setEndTime(long endTime) {
            this.endTime = endTime;
        }

        public String getExceptionCode() {
            return exceptionCode;
        }

        public void setExceptionCode(String exceptionCode) {
            this.exceptionCode = exceptionCode;
        }

        public String getExceptionDescription() {
            return exceptionDescription;
        }

        public void setExceptionDescription(String exceptionDescription) {
            this.exceptionDescription = exceptionDescription;
        }

        public String getExceptionDetail() {
            return exceptionDetail;
        }

        public void setExceptionDetail(String exceptionDetail) {
            this.exceptionDetail = exceptionDetail;
        }

    }
}
