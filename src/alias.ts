// type alias
type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string,
}
const crush1: CrushType = {
    name: "Pratishruti",
    age: 25,
    profession: "Pharmacist",
    address: "Chittagong"
};

const crush2: CrushType = {
    name: "Soumitrisha",
    age: 22,
    profession: "Actress",
    address: "India"
};

const crush3: CrushType = {
    name: "Adrit",
    profession: "Actor",
    address: "India"
}

// type alias for boolean type
type CrushMarriedType = boolean
const isCrushMarried: CrushMarriedType = false;

// do multiple task by one function with type alias
type OperationType = (x: number, y: number) => number
const calculate = (num1: number, num2: number, operation: OperationType) => {
    return operation(num1, num2);
}

calculate(20, 30, (x, y) => x + y);
calculate(50, 40, (x, y) => x - y);
calculate(10, 10, (x, y) => x * y);
calculate(50, 10, (x, y) => x / y);