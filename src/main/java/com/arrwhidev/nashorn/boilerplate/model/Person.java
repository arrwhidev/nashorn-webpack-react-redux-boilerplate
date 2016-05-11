package com.arrwhidev.nashorn.boilerplate.model;

public class Person {

    private String firstName;
    private String secondName;
    private int age;

    public Person(String fn, String sn, int age) {
        this.firstName = fn;
        this.secondName = sn;
        this.age = age;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public int getAge() {
        return age;
    }
}
