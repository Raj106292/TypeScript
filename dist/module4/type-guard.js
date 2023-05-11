"use strict";
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return num1.toString() + num2.toString();
    }
}
add("1", "2"); // "12"
add(1, 2); // 3
const normalUser1 = { name: "Mr. kallu" };
const adminUser1 = { name: "Mr. Gallu", role: "Admin", };
function getUser(user) {
    if ("role" in user) {
        return `I am ${user.name} and my role is ${user.role}`;
    }
    else {
        return `I am ${user.name} and I am a normal user`;
    }
}
console.log('user1', getUser(normalUser1));
console.log('user2', getUser(adminUser1));
// instance of guard
class theAnimal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    makeSound() {
        console.log(`The ${this.name} is making sound`);
    }
}
class Dog extends theAnimal {
    constructor(name, species, sound) {
        super(name, species);
        this.sound = sound;
    }
    makeBark() {
        console.log("I am barking");
    }
}
class Cat extends theAnimal {
    constructor(name, species, sound) {
        super(name, species);
        this.sound = sound;
    }
    makeMeow() {
        console.log("I am meowing");
    }
}
const animal1 = new Dog("German Shepherd", "Dog", "Bark"); // instance of dog
const animal2 = new Cat("Kitty", "Cat", "Meow"); // instance of cat
function isDog(animal) {
    return animal instanceof Dog;
}
function isCat(animal) {
    return animal instanceof Cat;
}
function getAnimal(animal) {
    if (isDog(animal)) {
        animal.makeBark();
    }
    else if (isCat(animal)) {
        animal.makeMeow();
    }
    else {
        animal.makeSound();
    }
}
// function getAnimal(animal: theAnimal) {
//     if (animal instanceof Dog) {
//         animal.makeBark();
//     }
//     else if (animal instanceof Cat) {
//         animal.makeMeow();
//     } else {
//         animal.makeSound();
//     }
// }
getAnimal(animal1);
getAnimal(animal2);
