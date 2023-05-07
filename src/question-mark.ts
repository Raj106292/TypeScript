// ternary operator
const age: number = 22;
const isAdult: string = age > 18 ? "Yes" : "No";
// console.log(isAdult);

// nullish coalescing operator
// set default value by depending on the null or undefined value
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser ?? 'Guest'
console.log(userName);

type Human = {
    name: string,
    age: number,
    address: {
        city: 'No City',
        road: 'No Road',
        house?: '',
    }
}

const human1: Human = {
    name: "Human",
    age: 110,
    address: {
        city: 'No City',
        road: 'No Road'
    }
}

const home = human1?.address?.house ?? 'No House';
console.log({home});

function generateAdder(a: number):(b: number) => number{
    return function(b : number){
        return a + b;
    }
}

const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));