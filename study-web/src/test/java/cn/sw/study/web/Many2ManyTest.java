package cn.sw.study.web;

import cn.sw.study.web.jpa.Course;
import cn.sw.study.web.jpa.Student;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

/**
 * Created by shaowei on 2017/10/15.
 */
public class Many2ManyTest {
    private EntityManagerFactory emf = null;
    private EntityManager em = null;
    private EntityTransaction transaction = null;

    @Before
    public void before(){
        emf = Persistence.createEntityManagerFactory("jpa");
        em = emf.createEntityManager();
        transaction = em.getTransaction();
        transaction.begin();
    }

    @After
    public void after(){
        transaction.commit();
        em.close();
        emf.close();
    }

    @Test
    public void testPersist(){
        Student student = new Student();
        student.setName("student");

        Course course = new Course();
        course.setName("course");

        //建立关联关系
        student.getCourses().add(course);
        course.getStudents().add(student);

        //持久化操作
        em.persist(student);
        em.persist(course);
    }

    @Test
    public void testFind(){
        Student student = em.find(Student.class, 1);
        System.out.println(student.getCourses().size());
    }

}
