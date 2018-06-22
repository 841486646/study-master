package cn.sw.study.common.test;

import cn.sw.study.utils.StrUtil;
import org.apache.http.HttpEntity;
import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.conn.ssl.X509HostnameVerifier;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;

import javax.net.ssl.*;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.security.KeyStore;
import java.security.cert.Certificate;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;
import java.util.*;

public class TestHttpsCustomer {
    private static String crt = "-----BEGIN CERTIFICATE-----\n" +
            "MIIFPjCCAyYCCQDeyNsJYQxUNTANBgkqhkiG9w0BAQsFADBhMQswCQYDVQQGEwJD\n" +
            "TjELMAkGA1UECAwCSlMxCzAJBgNVBAcMAk5KMQ0wCwYDVQQKDAREWVlUMQ0wCwYD\n" +
            "VQQLDAREWVlUMRowGAYDVQQDDBFhcHBjbGllbnQuamVtLmNvbTAeFw0xNjA2MDYw\n" +
            "NTQxMjFaFw0yNjA2MDQwNTQxMjFaMGExCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJK\n" +
            "UzELMAkGA1UEBwwCTkoxDTALBgNVBAoMBERZWVQxDTALBgNVBAsMBERZWVQxGjAY\n" +
            "BgNVBAMMEWFwcGNsaWVudC5qZW0uY29tMIICIjANBgkqhkiG9w0BAQEFAAOCAg8A\n" +
            "MIICCgKCAgEAwotI4IXrUqQOCh3E2Ejx+ix9xLDNjCpJBJf4zzKB8+05iSjL94ZO\n" +
            "NaUhMPWw+8BzYpYCH9B6RsaOpP2NUT8EG72topINh/vWBy7R2IGPfPbpvMIBWn3K\n" +
            "TuJxQjDx/w/ns8QETEUQDAVkkWUv2qqUw6E2oPOWPY5dJvnWJ6Q0fbCs/r11cIKh\n" +
            "zLp/sMKfLq2MgZuoLGYSmFyHJRP0oattUbWEkadyFyXbn/3QTD0iU7jXhxkpVQlv\n" +
            "pbj3Zo/5+YnAWptXin9Sa5PEuqHTXZ6Y9BXrp+n6rlEo1Qi/15FZtIoMBnS2N3qX\n" +
            "uRX3RlehccSjOUgHbelyaj1Zw6wOS4b3zGYKqh+m2x+Kluwh45Z72xGz078OTjI0\n" +
            "hQXZPePj4lChRY3+Gpm3i3imHFuQwavnXs2a+yz8gyj0lSM9fmN5TSGNi1zgx9+N\n" +
            "X1W6kCm/KajlIp1yDMNxjI/pDdOcx69P3UqLp6hvdxfv7xjc03HRqUdvGzbi8ucI\n" +
            "dvPXknEuZQO7ofKeEMMvFv4sZcbciDPHMf0MNzRASarJleDcO0Xmf44VDn+nDxFq\n" +
            "XYhALECYO9Q+bX4pfzGqNRopf5XnRJBieFTLBX3oT6adNp4BsCxukTWRXOK3yQhV\n" +
            "zbR4icRziCh7yqmbf8gwAQvnvbX5UgGh5RaUtR3SOMgYfOA3PFIoG2kCAwEAATAN\n" +
            "BgkqhkiG9w0BAQsFAAOCAgEAeLshqhNM5f6q6aYwKNny1W2d+ROhxYaaGQ0vBwu+\n" +
            "lgCDnJ4WUlpXtyjUKXW4YU4Yjb1cuqwJp3GO8mSF/vI5DJ4/4SAWsaESIUAbdIDT\n" +
            "t24QWU1pJauNpzepnyf2RaX2PndiHahWp1xWLGLeED5PIfZxOfF+IE0yuPNtNLzy\n" +
            "5N/nMq8EMnloSZlTLdpbicSFvn/rPAcQ5yQQqICC8ZwvwDcBPTPyukbYaQDItHUT\n" +
            "b9AqNHN8OsOLDaB98YGKZfzttMWIXKLBSfjfIfieWYBZKgOXxjzhx2/Din+YiZMH\n" +
            "lXoUNmDbMponA2M7kHLxfLRzDeuPgEZUBkOVtS3Z2c0YlnIROYRVqVoHe96hk3AV\n" +
            "L1LznJrVO7nePjI6ZWVkP8Mj3/gFYa0gp/cYuYRG2kzgCiqMWrUn9k1LJ7+UK3f9\n" +
            "quvQQzqoXQGQPSWfeokZf+3k0DCRGAwkfXwz2DnGukN3WT6H7M2h6tXUPAvECNQp\n" +
            "dA/Es3mRWVPvBdUUMo/XULAf+dU/NTMJdm+C69x0SwPAeaQg25W/mS0IPenQU5Z9\n" +
            "vKLdwmrgHXL7r8KrZWhR+M3TH/Vxx9KR8XepV5qk559HLT0nlp18cIcTnbzGenq4\n" +
            "50bil2YZ9nSwYaMRYj1+e7VvhW5dfS4yCnyN2XTSKyMLaJhlynjXj0sgmpuFOSOf\n" +
            "4uY=\n" +
            "-----END CERTIFICATE-----";

    private static SSLContext trustManagerForCertificates()
            throws GeneralSecurityException, IOException {
        CertificateFactory certificateFactory = CertificateFactory.getInstance("X.509");
        InputStream in = new ByteArrayInputStream(crt.getBytes("utf-8"));
        Collection<? extends Certificate> certificates = certificateFactory.generateCertificates(in);
        if (certificates.isEmpty()) {
            throw new IllegalArgumentException("expected non-empty set of trusted certificates");
        }

        // Put the certificates a key store.
        char[] password = "password".toCharArray(); // Any password will work.
        KeyStore keyStore = newEmptyKeyStore(password);
        int index = 0;
        for (Certificate certificate : certificates) {
            String certificateAlias = Integer.toString(index++);
            keyStore.setCertificateEntry(certificateAlias, certificate);
        }

        // Use it to build an X509 trust manager.
        KeyManagerFactory keyManagerFactory = KeyManagerFactory.getInstance(
                KeyManagerFactory.getDefaultAlgorithm());
        keyManagerFactory.init(keyStore, password);
        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance(
                TrustManagerFactory.getDefaultAlgorithm());
        trustManagerFactory.init(keyStore);
        TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();
        if (trustManagers.length != 1 || !(trustManagers[0] instanceof X509TrustManager)) {
            throw new IllegalStateException("Unexpected default trust managers:"
                    + Arrays.toString(trustManagers));
        }


        SSLContext ssContext = SSLContext.getInstance("SSL");
        ssContext.init(keyManagerFactory.getKeyManagers(),trustManagers,null);
        return  ssContext;
    }

    private static KeyStore newEmptyKeyStore(char[] password) throws GeneralSecurityException {
        try {
            KeyStore keyStore = KeyStore.getInstance(KeyStore.getDefaultType());
            keyStore.load(null, password);
            return keyStore;
        } catch (IOException e) {
            throw new AssertionError(e);
        }
    }

    public static String doSSLPost(String url, List<NameValuePair> headers, String body, Integer connTimeout, Integer soTimeout, Integer crTimeout, String charset) {
        CloseableHttpClient client = null;
        CloseableHttpResponse rsp = null;
        HttpPost post = null;
        try {
            SSLConnectionSocketFactory sslsf = new SSLConnectionSocketFactory(trustManagerForCertificates(),new X509HostnameVerifier() {
                @Override
                public void verify(String host, SSLSocket ssl) throws IOException {
                }

                @Override
                public void verify(String host, X509Certificate cert) throws SSLException {
                }

                @Override
                public void verify(String host, String[] cns, String[] subjectAlts) throws SSLException {
                }

                @Override
                public boolean verify(String arg0, SSLSession arg1) {
                    return false;
                }
            }
            );
            client = HttpClients.custom().setSSLSocketFactory(sslsf).build();
            // 设置请求各超时时间
            RequestConfig rc = RequestConfig.custom()
                    // 请求连接时间  默认60秒
                    .setConnectTimeout(null == connTimeout ? 60000 : connTimeout)
                    // 数据传输时间 默认180秒
                    .setSocketTimeout(null == soTimeout ? 180000 : soTimeout)
                    // 连接管理器超时时间 0:无限;-1:未定义
                    .setConnectionRequestTimeout(null == crTimeout ? 0 : crTimeout)
                    .build();
            // Post请求
            post = new HttpPost(url);
            post.setConfig(rc);
            // 响应
            if (null != headers) {
                for (int i = 0; i < headers.size(); i++) {
                    post.setHeader(headers.get(i).getName(), headers.get(i).getValue());
                }
            }
            String usedCharset = StrUtil.isBlank(charset) ? "UTF-8" : charset;
            if (StrUtil.isNotEmpty(body)) {
                post.setEntity(new StringEntity(body, usedCharset));
            }
            rsp = client.execute(post);
            HttpEntity eny = rsp.getEntity();
            if (null == eny) {
                return null;
            } else {
                return EntityUtils.toString(eny, (StrUtil.isBlank(charset) ? "UTF-8" : charset));
            }
        }  catch (Exception e) {
            e.printStackTrace();
        } finally {
            // 关闭HttpClient
            try {
                // 销毁Response体对象
                // 关闭HttpPost
                if(post != null){
                    post.abort();
                }
                if(rsp != null){
                    rsp.close();
                }
                if(client != null){
                    client.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static String doSSLPost(String url, Map<String, String> headers, String body) {
        List<NameValuePair> headList = null;
        if (headers != null) {
            headList = new ArrayList<NameValuePair>();

            Set<String> keySet = headers.keySet();
            for (String key : keySet) {
                headList.add(new BasicNameValuePair(key, headers.get(key)));
            }
        }
        return doSSLPost(url, headList, body, null, null, null, null);
    }

    public static void main(String[] args) {
        String url = "https://appclient.jme.com:8092/jmeapptphqapi/puer/tp/generalreal/601002,601001-false";
        Map<String, String> headers = new HashMap<String, String>();
        headers.put("appType", "server");
        headers.put("reqfrom", "chast");
        System.out.println(doSSLPost(url, headers, null));
    }
}
