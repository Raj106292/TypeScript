interface NewPerson{
    name: string;
    age: number;
    email?: string;
    contactNumber: string;
}

// PICK
type Email = Pick<NewPerson, "email">;
type Contact = Pick<NewPerson, "contactNumber" | "email">;

// Omit
type Name = Omit<NewPerson, "email" | "contactNumber">;

// Partial
type Optional = Partial<NewPerson>;

// Required
type Necessary = Required<NewPerson>

// Readonly
type MakeReadonly = Readonly<NewPerson>

// type myObject = {
//     a: string;
//     b: string;
//     c: string;
// }


// using index signature
// type myObject = {
//     [key: string]: string
// }

// Record
type myObject = Record<'a' |'b'|'c', string>

const obj: myObject = {
    a: "1",
    b: "2",
    c: "3"
}
