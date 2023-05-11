"use strict";
const crush1 = {
    name: "Pratishruti",
    age: 25,
    profession: "Pharmacist",
    address: "Chittagong"
};
const crush2 = {
    name: "Soumitrisha",
    age: 22,
    profession: "Actress",
    address: "India"
};
const crush3 = {
    name: "Adrit",
    profession: "Actor",
    address: "India"
};
const isCrushMarried = false;
const calculate = (num1, num2, operation) => {
    return operation(num1, num2);
};
calculate(20, 30, (x, y) => x + y);
calculate(50, 40, (x, y) => x - y);
calculate(10, 10, (x, y) => x * y);
calculate(50, 10, (x, y) => x / y);
