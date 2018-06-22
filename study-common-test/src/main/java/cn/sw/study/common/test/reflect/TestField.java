package cn.sw.study.common.test.reflect;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * Created by shaowei on 2017/9/4.
 */
public class TestField {
    public static void main(String[] args) throws Exception {
        /*
        * 实列化类 方法1
        */
        Grade bean = new Grade("java", "99");
        reflectClass(bean.getClass(), bean);
       /*
        * 实列化类 方法2
        */
        String classPath = "cn.sw.study.common.test.reflect.Grade";
        Class cla = TestField.class.getClassLoader().loadClass(classPath);
        reflectClass(cla, cla.newInstance());
    }

    private static void reflectClass(Class cla, Object bean) throws Exception {
        /*
        * 得到类中的所有属性集合
        */
        Field[] fs = cla.getDeclaredFields();
        for (int i = 0; i < fs.length; i++) {
            Field f = fs[i];
            f.setAccessible(true); //设置些属性是可以访问的
            Object val = f.get(bean);//得到此属性的值
            System.out.println("name:" + f.getName() + "\t value = " + val);
            String type = f.getType().toString();//得到此属性的类型
            if (type.endsWith("String")) {
                System.out.println(f.getType() + "\t是String");
                f.set(bean, "12");        //给属性设值
            } else if (type.endsWith("int") || type.endsWith("Integer")) {
                System.out.println(f.getType() + "\t是int");
                f.set(bean, 12);       //给属性设值
            } else {
                System.out.println(f.getType() + "\t");
            }
        }

       /*
        * 得到类中的方法
        */
        Method[] methods = cla.getMethods();
        for (int i = 0; i < methods.length; i++) {
            Method method = methods[i];
            if (method.getName().startsWith("get")) {
                System.out.print("methodName:" + method.getName() + "\t");
                System.out.println("value:" + method.invoke(bean));//得到get 方法的值
            }
        }
    }
}
