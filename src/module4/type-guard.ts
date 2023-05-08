// keyof guard
type Alphanumeric = string | number;

function add(num1: Alphanumeric, num2: Alphanumeric): Alphanumeric {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        return num1.toString() + num2.toString();
    }
}

add("1", "2");
add(1, 2);

// in guard
type normalUser = { name: string };

type adminUserType = { name: string; role: "Admin" };

const normalUser1: normalUser = { name: "Mr. kallu" };

const adminUser1: adminUserType = { name: "Mr. Gallu", role: "Admin", };

function getUser(user: normalUser | adminUserType): string {
    if ("role" in user) {
        return `I am ${user.name} and my role is ${user.role}`;
    } else {
        return `I am ${user.name} and I am a normal user`;
    }
}

console.log(getUser(adminUser1));

// instance of guard
class theAnimal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        console.log(`The ${this.name} is making sound`);
    }
}

class Dog extends theAnimal {
    sound: string;
    constructor(name: string, species: string, sound: string) {
        super(name, species);
        this.sound = sound;
    }

    makeBark() {
        console.log("I am barking");
    }
}

class Cat extends theAnimal {
    sound: string;
    constructor(name: string, species: string, sound: string) {
        super(name, species);
        this.sound = sound;
    }

    makeMeow() {
        console.log("I am Meowing");
    }
}

const animal1 = new Dog("German Bhai", "Dog", "Bark");
const animal2 = new Cat("Chocolate", "Cat", "Meow");

function isDog(animal: theAnimal): animal is Dog {
    return animal instanceof Dog;
}

function isCat(animal: theAnimal): animal is Cat {
    return animal instanceof Cat;
}

function getAnimal(animal: theAnimal) {
    if (animal instanceof Dog) {
        animal.makeBark();
    }
    if (animal instanceof Cat) {
        animal.makeMeow();
    } else {
        animal.makeSound();
    }
}