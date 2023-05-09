// class Person{
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     makeSleep(hours: number): string{
//         return `This ${this.name} will sleep for ${hours} hours`;
//     }
// }

// class Student extends Person{
//     constructor(name: string, age: number, address: string){
//         super(name, age, address)
//     }
// }

// const student1 = new Student("Rahim", 25, "Chittagong");
// student1.makeSleep(12);

// class Teacher extends Person{
//     designation: string;

//     constructor(name: string, age: number, address: string, designation: string){
//         super(name, age, address)
//         this.designation = designation;
//     }

//     takeClasses(numberOfClass: number): string{
//         return `The ${this.name} will take ${numberOfClass} class`;
//     }
// }

// const teacher1 = new Teacher("Kamal", 45, "Chittagong", "Senior Lecturer");
// teacher1.takeClasses(4);