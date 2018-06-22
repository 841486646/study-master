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
%>
<html>
<head>
    <script src="http://cdn.bootcss.com/jquery/2.2.3/jquery.min.js"></script>
    <script>
        function login(){
            $.ajax({
                url:"<%=rootUrl%>/test/login1",
//                data:$('#loginForm').serialize(),
                data:{"userName": "112", "password":"333"},
                dataType:"xml",
                contentType:"application/json",
                success:function(data) {
                     alert(data);
                }
            });
        }
    </script>
</head>
<body>
数值：
    <fmt:formatNumber value="1" pattern="0.00"/><br/>

<form id="loginForm">
用户名：<input name="userName" type="text" /><br/>
密码：<input name="password" type="password" /><br/>
    <input type="button" value="提交" onclick="login()"/>
</form>
<%--<script src="<%=rootUrl%>/resources/js/test.js"></script>--%>
<%--<script>--%>
    <%--$(function(){--%>
        <%--alert(1);--%>
        <%--$("body").alert();--%>
    <%--});--%>
<%--</script>--%>
</body>
</html>
