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
abstract class Vehicle {
    constructor(public name: string, public brand: string, public model: number) { }

    abstract startEngine(): void;
    abstract stopEngine(): void;
    move(): void {
        console.log("I am moving");
    }
    test() {
        console.log("I am for testing purpose");
    }
}

class Car extends Vehicle{
    startEngine(): void {
        console.log("I am starting the engine");
    };
    stopEngine(): void {
        console.log("I am stopping the engine");
    }
}

// const car1 = new Vehicle("Car", "Hyundai", 2021);