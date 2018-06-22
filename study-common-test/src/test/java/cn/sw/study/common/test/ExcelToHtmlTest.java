package cn.sw.study.common.test;

import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.Dispatch;
import com.jacob.com.Variant;
import org.junit.Test;

/**
 * Excel转换成html
 * Created by shaowei on 2017/8/31.
 */
public class ExcelToHtmlTest {
    @Test
    public void excelToHtml() {
        String xlsfile = new String("F:\\apps\\test\\test.xlsx"); //需要转换的excel文件
        String htmlfile = new String("F:\\apps\\test\\test.html");   //转换的html文件
        ActiveXComponent app = new ActiveXComponent("Excel.Application"); // 启动excel
        try {
            app.setProperty("Visible", new Variant(false));
            Dispatch excels = app.getProperty("Workbooks").toDispatch();
            Dispatch excel = Dispatch.invoke(
                    excels,
                    "Open",
                    Dispatch.Method,
                    new Object[]{xlsfile, new Variant(false),
                            new Variant(true)}, new int[1]).toDispatch();
            Dispatch.invoke(excel, "SaveAs", Dispatch.Method, new Object[]{
                    htmlfile, new Variant(44)}, new int[1]);
            Variant f = new Variant(false);
            Dispatch.call(excel, "Close", f);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            app.invoke("Quit", new Variant[]{});
        }
        System.out.println("转换成功！");
    }
}
