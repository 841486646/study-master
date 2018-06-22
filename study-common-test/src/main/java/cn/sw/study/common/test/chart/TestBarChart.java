package cn.sw.study.common.test.chart;

import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.chart.axis.CategoryAxis;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.CategoryPlot;
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;

import javax.swing.*;
import java.awt.*;
import java.sql.*;
import java.util.ArrayList;

/**
 * 测试柱状图
 * Created by shaowei on 2017/8/16.
 */
public class TestBarChart {
    ChartPanel frame;
    public TestBarChart(){
        CategoryDataset dataset = getDataSet();
        JFreeChart chart = ChartFactory.createBarChart3D(
                "学校", // 图表标题
                "学校类型", // 目录轴的显示标签
                "数量", // 数值轴的显示标签
                dataset, // 数据集
                PlotOrientation.VERTICAL, // 图表方向：水平、垂直
                true,      // 是否显示图例(对于简单的柱状图必须是false)
                false,     // 是否生成工具
                false      // 是否生成URL链接
        );
        //从这里开始
        CategoryPlot plot=chart.getCategoryPlot();//获取图表区域对象
        CategoryAxis domainAxis=plot.getDomainAxis();     //水平底部列表
        domainAxis.setTickLabelFont(new Font("宋体",Font.BOLD,12)); //垂直标题
        domainAxis.setLabelFont(new Font("黑体", Font.BOLD,14));     //水平底部标题
        ValueAxis rangeAxis=plot.getRangeAxis();//获取柱状
        rangeAxis.setLabelFont(new Font("黑体",Font.BOLD,15));
        chart.getLegend().setItemFont(new Font("黑体", Font.BOLD, 15));
        chart.getTitle().setFont(new Font("宋体",Font.BOLD,20));//设置标题字体
        //到这里结束，虽然代码有点多，但只为一个目的，解决汉字乱码问题
        frame=new ChartPanel(chart,true);    //这里也可以用chartFrame,可以直接生成一个独立的Frame
    }
    private static CategoryDataset getDataSet() {
        DefaultCategoryDataset dataset = new DefaultCategoryDataset();
        java.util.List<SchoolInfo> list = queryData();
        for (SchoolInfo schoolInfo : list) {
            dataset.addValue(schoolInfo.getAmount(), schoolInfo.getArea(), schoolInfo.getSchool());
        }
        return dataset;
    }
    public ChartPanel getChartPanel(){
        return frame;
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Java柱状图图");
        // frame.setLayout(new GridLayout(2,2,10,10));
        frame.add(new TestBarChart().getChartPanel()); // 添加柱形图
        frame.setBounds(50, 50, 800, 600);
        frame.setVisible(true);
    }

    public static java.util.List<SchoolInfo> queryData(){
        Connection conn = null;
        String sql;
        String url = "jdbc:mysql://localhost:3306/study?"
                + "user=root&password=shaowei&useUnicode=true&characterEncoding=UTF8";
        java.util.List<SchoolInfo> list = new ArrayList<SchoolInfo>();
        try {
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();
            sql = "select id,school,area,amount from t_school_info";
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()) {
                list.add(new SchoolInfo(rs.getInt(1), rs.getInt(4), rs.getString(3), rs.getString(2)));
            }
        } catch (SQLException e) {
            System.out.println("MySQL操作错误");
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return list;
    }
}
