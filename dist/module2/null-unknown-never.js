"use strict";
// null types
const searchName = (value) => {
    if (value === null) {
        console.log("There is nothing to search");
    }
    else {
        console.log("Searching...");
    }
};
searchName(null);
// unknown types
// kmh^-1 --> ms^-1
const getCarSpeed = (speed) => {
    if (typeof (speed) === "number") {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My car speed is ${convertedSpeed}`);
    }
    if (typeof (speed) === 'string') {
        const [value, unit] = speed.split(' '); // ["10", "kmh^-1"]
        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My car speed is ${convertedSpeed}`);
    }
    else {
        console.log("The type of speed is wrong");
    }
};
getCarSpeed(10);
getCarSpeed("36 kmh^-1");
// never type
function throwError(message) {
    throw new Error(message);
}
throwError('Error Happened');
