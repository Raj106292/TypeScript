type PersonType = {
    name: string,
    age: number,
    address: string
}

type NewType  = "name" | "age" | "address"; // manually created

// key Of operator
type NewTypeUsingKeyOf = keyof(PersonType);

const a:NewType = 'age';
const b:NewTypeUsingKeyOf = 'address';

const x = {
    name: "abcd efgh",
    age: 55,
}

function getProperty<X, Y extends keyof X>(obj: X, key: Y){
    obj[key];
}

const property = getProperty(x, 'age');

// bracket notation
x['name']; // return the name from object x
