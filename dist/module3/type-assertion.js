"use strict";
let email;
email = "Next Level Web Development";
email.length;
email.length;
function convertKgToGram(param) {
    if (typeof param === "string") {
        const value = parseFloat(param);
        return `${value}kg = ${value * 1000}gram`;
    }
    if (typeof param === "number") {
        return `${param}kg = ${param * 1000}gram`;
    }
}
const valueOfKgInNumber = convertKgToGram(15);
console.log(valueOfKgInNumber);
try {
    console.log("Hello");
}
catch (error) {
    console.log(error.message);
}
