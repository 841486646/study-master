package cn.sw.study.common.test.generic.wildcard;

import java.util.ArrayList;
import java.util.List;

/**
 * 泛型通配符测试
 */
public class Test {
    public static void add(List<? super Student> list) {
        Student student = new Student();
        student.setName("Joe");
        student.setAge(11);
        list.add(student);
    }

    public static void main(String[] args) {
        List<Person> personList = new ArrayList<Person>();
        add(personList);
        List<Student> studentList = new ArrayList<Student>();
        add(studentList);
    }

//    public static void print(List<? extends Person> list) {
//        for (Person person : list) {
//            System.out.println("name:" + person.getName() + ",age:" + person.getAge());
//        }
//    }
//
//    public static void main(String[] args) {
//        List<Person> personList = new ArrayList<Person>();
//        Person person1 = new Person();
//        person1.setName("Tom");
//        person1.setAge(10);
//        personList.add(person1);
//        Person person2 = new Person();
//        person2.setName("James");
//        person2.setAge(20);
//        personList.add(person2);
//
//        print(personList);
//        List<Student> studentList = new ArrayList<Student>();
//        Student student1 = new Student();
//        student1.setName("Joe");
//        student1.setAge(11);
//        studentList.add(student1);
//        Student student2 = new Student();
//        student2.setName("Alice");
//        student2.setAge(12);
//        studentList.add(student2);
//
//        print(studentList);
//    }

//    public static void print(List<?> list) {
//        for (Object obj : list) {
//            System.out.println(obj);
//        }
//    }

//    public static void main(String[] args) {
//        List<Student> studentList = new ArrayList<Student>();
//        Student student1 = new Student();
//        student1.setCourse("English");
//        student1.setGrade(5);
//        studentList.add(student1);
//        Student student2 = new Student();
//        student2.setCourse("Math");
//        student2.setGrade(6);
//        studentList.add(student2);
//
//        print(studentList);
//    }

//    public static void main(String[] args) {
//        List<Person> personList = new ArrayList<Person>();
//        Person person1 = new Person();
//        person1.setName("Tom");
//        person1.setAge(10);
//        personList.add(person1);
//        Person person2 = new Person();
//        person2.setName("James");
//        person2.setAge(20);
//        personList.add(person2);
//
//        print(personList);
//    }

//    public static void main(String[] args) {
//        Person[] persons = new Person[10];
//        Person[] persons1 = new Student[10];
//
//        List<Person> personList = new ArrayList<Person>();
//        //List<Person> personList1 = new ArrayList<Student>();
//    }
}
