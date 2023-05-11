"use strict";
;
const addMeToMyCrushMind = (myDetails) => {
    const myCrush = "Pratishruti";
    const newData = Object.assign(Object.assign({}, myDetails), { myCrush });
    return newData;
};
const myDetails = {
    name: "Raj Das",
    age: 25,
    salary: 50000,
    other1: true
};
const finalData = addMeToMyCrushMind(myDetails);
