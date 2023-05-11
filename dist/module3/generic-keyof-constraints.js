"use strict";
const a = 'age';
const b = 'address';
const x = {
    name: "abcd efgh",
    age: 55,
};
function getProperty(obj, key) {
    obj[key];
}
const property = getProperty(x, 'age');
// bracket notation
x['name']; // return the name from object x
