package cn.sw.study.common.test.alisms;

import java.util.HashMap;
import java.util.Map;

import org.apache.http.HttpResponse;
import org.apache.http.util.EntityUtils;

/**
 * 阿里云短信
 * @author ck
 * @date 2017-8-9
 * @RecNum 目标手机号,多条记录可以英文逗号分隔
 * @TemplateCode 模板CODE
 * @ParamString  模板变量，其中数字必须转换为字符串，个人用户每个变量长度必须小于15个字符。例如：短信模板为：“短信验证码${no}”。若参数传递为 {“no”:”123456”}，用户将接收到的短信内容为：【短信签名】短信验证码123456
 */
public class SmsUtil {
		public static Map<String,Object> SendSms(String RecNum,String TemplateCode,String ParamString){
			Map<String, Object> resMap = new HashMap<String, Object>();
			String host = "http://sms.market.alicloudapi.com";
		    String path = "/singleSendSms";
		    String method = "GET";
		    String appcode = "c1bbcb48a3444a57acc24047a59b4669";
		    Map<String, String> headers = new HashMap<String, String>();
		    headers.put("Authorization", "APPCODE " +appcode);
		    Map<String, String> querys = new HashMap<String, String>();
		    querys.put("ParamString", ParamString);
		    querys.put("RecNum", RecNum);
		    querys.put("SignName", "");
		    querys.put("TemplateCode", TemplateCode);
		    querys.put("AppCode", appcode);
		    try {
		    	HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);
				System.out.println(response.toString());
				System.out.println(EntityUtils.toString(response.getEntity()));
//		    	if(body==null || "".equals(body) || "exception".equals(body)){
//		    		resMap.put("success", false);
//		    		resMap.put("message", "调用接口失败！");
//		    	}else{
//		    		Map<String, Object> map= JsonUtils.fromJson(body.toString());
//		    		resMap.put("success", map.get("scuuess"));
//		    		resMap.put("message", map.get("message"));
//		    	}
		    } catch (Exception e) {
		    	e.printStackTrace();
		    }
			return resMap;
		}
		
		public static void main(String[] args) {
			SendSms("15150663785", "2", "{\"no\":\"123456\"}");
		}
		
}
