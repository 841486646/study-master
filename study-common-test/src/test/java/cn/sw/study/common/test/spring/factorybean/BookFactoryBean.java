package cn.sw.study.common.test.spring.factorybean;

import org.springframework.beans.factory.FactoryBean;

/**
 * Created by shaowei on 2017/7/13.
 * 书本工厂bean
 */
public class BookFactoryBean implements FactoryBean<Book> {
    @Override
    public Book getObject() throws Exception {
        Book book = new Book();
        book.setName("spring");
        book.setPrice(80.0);
        return book;
    }

    @Override
    public Class<?> getObjectType() {
        return Book.class;
    }

    @Override
    public boolean isSingleton() {
        return false;
    }
}
