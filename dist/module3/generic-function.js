"use strict";
// generic function -> arrow function
const createArray = (param1, param2) => {
    return [param1, param2];
};
// generic function -> normal function
function createArray1(param1, param2) {
    return [param1, param2];
}
;
const result1 = createArray("I love my country", "Bangladesh");
const result2 = createArray(true, ["USA"]);
const result3 = createArray({ name: "Bangladesh" }, "My Motherland");
// spread operator
const myInfo = {
    name: "Raj",
    age: 25,
    salary: 500000,
};
// const newData = {...myInfo, myCrush};
const addMyCrush = (myInfo) => {
    const myCrush = "Pratishruti";
    const newData = Object.assign(Object.assign({}, myInfo), { myCrush });
    return newData;
};
const result = addMyCrush(myInfo);
