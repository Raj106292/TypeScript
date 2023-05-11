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
