class Animal {
    // by default the properties and the method are public

    // Parameter Properties
    constructor(public name: string, public species: string, public sound: string){}

    public makeSound() {
        console.log(`The ${this.name} says ${this.sound}`); // 'The German Shepherd says Ghaw Ghaw' 
    }
}

const dog = new Animal('German Shepherd', 'dog', 'Ghew Ghew');
dog.makeSound();

const cat = new Animal('Pussy', 'Cat', 'Meow Meow');
cat.makeSound();