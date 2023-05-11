"use strict";
var _a, _b;
// ternary operator
const age = 22;
const isAdult = age > 18 ? "Yes" : "No";
// console.log(isAdult);
// nullish coalescing operator
// set default value by depending on the null or undefined value
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : 'Guest';
console.log(userName);
const human1 = {
    name: "Human",
    age: 110,
    address: {
        city: 'No City',
        road: 'No Road'
    }
};
const home = (_b = (_a = human1 === null || human1 === void 0 ? void 0 : human1.address) === null || _a === void 0 ? void 0 : _a.house) !== null && _b !== void 0 ? _b : 'No House';
console.log({ home });
function generateAdder(a) {
    return function (b) {
        return a + b;
    };
}
const addTwo = generateAdder(2);
console.log(addTwo(3));
console.log(addTwo(5));
