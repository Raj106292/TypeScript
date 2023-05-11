"use strict";
class Person {
    takeNap() {
        console.log("I sleep 8 hours per day");
    }
}
class Student extends Person {
    takeNap() {
        console.log("I sleep 10 hours per day");
    }
}
class Developer extends Person {
    takeNap() {
        console.log("I sleep 5 hours per day");
    }
}
function getNap(param) {
    param.takeNap();
}
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();
getNap(person1);
getNap(person2);
getNap(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    getArea() {
        return this.length * this.width;
    }
}
function getAreaOfShape(param) {
    console.log(param.getArea());
}
const circleArea = new Circle(5);
const rectangleArea = new Rectangle(10, 12);
getAreaOfShape(circleArea);
getAreaOfShape(rectangleArea);
