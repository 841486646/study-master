<%@ page import="java.util.Locale" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
    String rootUrl = request.getScheme()
            + "://" + request.getServerName()
            + ":"
            + request.getServerPort()
            + request.getContextPath();
//    String userAgent = request.getHeader("user-agent");
    Locale locale = request.getLocale();
    String country = locale.getCountry();
    String language = locale.getLanguage();
%>
<html>
<head>
    <script src="http://cdn.bootcss.com/jquery/2.2.3/jquery.min.js"></script>
    <script>
        <%--var xmlhttp;--%>
        <%--if (window.XMLHttpRequest)--%>
        <%--{--%>
            <%--//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码--%>
            <%--xmlhttp=new XMLHttpRequest();--%>
        <%--}--%>
        <%--else--%>
        <%--{--%>
            <%--// IE6, IE5 浏览器执行代码--%>
            <%--xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");--%>
        <%--}--%>
        <%--xmlhttp.open("POST","<%=rootUrl%>/test/login",true);--%>
        <%--xmlhttp.onreadystatechange=function()--%>
        <%--{--%>
            <%--if (xmlhttp.readyState==4 && xmlhttp.status==200)--%>
            <%--{--%>
                <%--alert(xmlhttp.responseText);--%>
            <%--}--%>
        <%--}--%>
        <%--xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");--%>
        <%--xmlhttp.send("userName=112&password=333");--%>


        <%--function login(){--%>
            <%--$.ajax({--%>
                <%--url:"<%=rootUrl%>/test/login",--%>
                <%--data:{"userName": "112", "password":"333"},--%>
                <%--dataType:"xml",--%>
                <%--contentType:"application/json",--%>
                <%--success:function(data) {--%>
                     <%--alert(data);--%>
                <%--}--%>
            <%--});--%>
        <%--}--%>
    </script>
</head>
<body>
<%--数值：--%>
    <%--<fmt:formatNumber value="1" pattern="0.00"/><br/>--%>

<%--<form id="loginForm">--%>
<%--用户名：<input name="userName" type="text" /><br/>--%>
<%--密码：<input name="password" type="password" /><br/>--%>
    <%--<input type="button" value="提交" onclick="login()"/>--%>
<%--</form>--%>

    <%--<div><%=userAgent%></div><br/>--%>
   测试页面
</body>
</html>
