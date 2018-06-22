package cn.sw.study.common.test;

import java.util.StringTokenizer;
import java.util.regex.Pattern;

/**
 * 测试字符串分割性能
 * Created by shaowei on 2017/8/26.
 */
public class TestStringSpilt {
    static String testShortStr = "#druid datasource\n" +
            "druid.initialSize=1\n" +
            "druid.minIdle=3\n" +
            "druid.maxActive=10\n" +
            "druid.maxWait=60000\n" +
            "druid.timeBetweenEvictionRunsMillis=60000\n" +
            "druid.minEvictableIdleTimeMillis=300000\n" +
            "druid.validationQuery=select now()\n" +
            "druid.testWhileIdle=true\n" +
            "druid.testOnBorrow=false\n" +
            "druid.testOnReturn=false\n" +
            "druid.poolPreparedStatements=true\n" +
            "druid.maxPoolPreparedStatementPerConnectionSize=20\n" +
            "druid.filters=wall,stat";

    static String testLongStr = "<dependencies>\n" +
            "        <dependency>\n" +
            "            <groupId>cn.sw</groupId>\n" +
            "            <artifactId>study-utils</artifactId>\n" +
            "            <version>${project.version}</version>\n" +
            "        </dependency>\n" +
            "        <!-- LOG -->\n" +
            "        <dependency>\n" +
            "            <groupId>ch.qos.logback</groupId>\n" +
            "            <artifactId>logback-classic</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.slf4j</groupId>\n" +
            "            <artifactId>slf4j-api</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.slf4j</groupId>\n" +
            "            <artifactId>log4j-over-slf4j</artifactId>\n" +
            "        </dependency>\n" +
            "        <!-- Spring begin -->\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-context</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-aop</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-beans</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-core</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-expression</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-web</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-webmvc</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-tx</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-jdbc</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-orm</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-aspects</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-context-support</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.springframework</groupId>\n" +
            "            <artifactId>spring-test</artifactId>\n" +
            "            <scope>test</scope>\n" +
            "        </dependency>\n" +
            "        <!-- Spring end -->\n" +
            "\n" +
            "        <!-- web相关jar包 -->\n" +
            "        <dependency>\n" +
            "            <groupId>javax.servlet</groupId>\n" +
            "            <artifactId>javax.servlet-api</artifactId>\n" +
            "            <scope>provided</scope>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>javax.servlet.jsp</groupId>\n" +
            "            <artifactId>jsp-api</artifactId>\n" +
            "            <scope>provided</scope>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>taglibs</groupId>\n" +
            "            <artifactId>standard</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>javax.servlet</groupId>\n" +
            "            <artifactId>jstl</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>tomcat</groupId>\n" +
            "            <artifactId>jasper-runtime</artifactId>\n" +
            "        </dependency>\n" +
            "\n" +
            "        <dependency>\n" +
            "            <groupId>com.alibaba</groupId>\n" +
            "            <artifactId>fastjson</artifactId>\n" +
            "        </dependency>\n" +
            "\n" +
            "        <dependency>\n" +
            "            <groupId>com.sun.tools.btrace</groupId>\n" +
            "            <artifactId>btrace-agent</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>com.sun.tools.btrace</groupId>\n" +
            "            <artifactId>btrace-boot</artifactId>\n" +
            "        </dependency>\n" +
            "\n" +
            "        <dependency>\n" +
            "            <groupId>mysql</groupId>\n" +
            "            <artifactId>mysql-connector-java</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.mybatis</groupId>\n" +
            "            <artifactId>mybatis</artifactId>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.mybatis</groupId>\n" +
            "            <artifactId>mybatis-spring</artifactId>\n" +
            "            <version>1.2.3</version>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.mybatis.generator</groupId>\n" +
            "            <artifactId>mybatis-generator-core</artifactId>\n" +
            "            <version>1.3.2</version>\n" +
            "        </dependency>\n" +
            "\n" +
            "        <dependency>\n" +
            "            <groupId>com.fasterxml.jackson.core</groupId>\n" +
            "            <artifactId>jackson-annotations</artifactId>\n" +
            "            <version>2.7.4</version>\n" +
            "        </dependency>\n" +
            "        <dependency>\n" +
            "            <groupId>org.apache.calcite</groupId>\n" +
            "            <artifactId>calcite-avatica</artifactId>\n" +
            "            <version>1.6.0</version>\n" +
            "        </dependency>\n" +
            "    </dependencies>";

    public static void main(String[] args) {
        System.out.println("====================短字符串测试开始=========================");
        doSplit(testShortStr);
        System.out.println("====================短字符串测试结束=========================");
        System.out.println("====================长字符串测试开始=========================");
        doSplit(testLongStr);
        System.out.println("====================长字符串测试结束=========================");
    }

    private static void doSplit(String testStr) {
        System.out.println("第一种方法:使用jdk的spilt切分字符串:");
        long st1 = System.nanoTime();
        String[] cache1 = testStr.split("\\n");
        for (int i = 0; i < cache1.length; i++) {
            System.out.print(cache1[i] + " ");
        }
        System.out.println("\n第一种消耗时间:" + (System.nanoTime() - st1));

        System.out.println("第二种方法:使用StringTokenizer切分字符串:");
        long st2 = System.nanoTime();
        StringTokenizer token = new StringTokenizer(testStr, "\n");
        while (token.hasMoreElements()) {
            System.out.print(token.nextElement() + " ");
        }
        System.out.println("\n第二种消耗时间:" + (System.nanoTime() - st2));

        System.out.println("第三种方法:使用jdk的pattern切分字符串:");
        long st3 = System.nanoTime();
        Pattern pattern = Pattern.compile("\\n");
        String[] cache2 = pattern.split(testStr);
        for (int i = 0; i < cache2.length; i++) {
            System.out.print(cache2[i] + " ");
        }
        System.out.println("\n第三种消耗时间:" + (System.nanoTime() - st3));
    }
}
