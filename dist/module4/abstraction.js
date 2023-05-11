"use strict";
// interface
// interface Vehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     move?(): void;
// }
// class Car implements Vehicle {
//     constructor(public name: string, public brand: string, public model: number) { }
//     startEngine(): void {
//         console.log("I am starting the engine");
//     }
//     stopEngine(): void {
//         console.log("I am stopping the engine");
//     }
//     test() {
//         console.log("I am for testing purpose");
//     }
// }
// const vehicle1 = new Car("Car", "Toyota", 2010);
// abstract class
class Vehicle {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    move() {
        console.log("I am moving");
    }
    test() {
        console.log("I am for testing purpose");
    }
}
class Car extends Vehicle {
    startEngine() {
        console.log("I am starting the engine");
    }
    ;
    stopEngine() {
        console.log("I am stopping the engine");
    }
}
// const car1 = new Vehicle("Car", "Hyundai", 2021);
