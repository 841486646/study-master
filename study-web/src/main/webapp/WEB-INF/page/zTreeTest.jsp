<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@include file="head.jsp"%>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="${basePath}/resources/ztree/css/zTreeStyle.css">
    <script type="text/javascript" src="${basePath}/resources/ztree/js/jquery-1.4.4.min.js" ></script>
    <script type="text/javascript" src="${basePath}/resources/ztree/js/jquery.ztree.core-3.5.min.js" ></script>
    <script type="text/javascript" src="${basePath}/resources/ztree/js/jquery.ztree.excheck-3.5.min.js"></script>
</head>
<body>
<legend>ztree</legend>
<fieldset>
    <div>
        <ul id="treeTest" class="ztree"></ul>
    </div>
</fieldset>
</body>
<script type="text/javascript">
    var setting = {
        check: {
            enable: true
        },
        data: {
            simpleData: {
                idKey: "id",
                pIdKey: "pId",
                enable: true,
                rootPId: 0
            }
        }
    };
    $(function() {
        var zNodes=eval('${nodes}');
        $.fn.zTree.init($("#treeTest"), setting, zNodes);
    });
</script>
</html>
