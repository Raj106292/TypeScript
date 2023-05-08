// // run map method on the type
// const arrayOfNumbers = [ 1, 2, 3];
// const arrayOfStrings = arrayOfNumbers.map(item => item.toString());
// console.log(arrayOfStrings);

// type Volume = {
//     height: number,
//     width: number,
//     depth: number
// }

// type B = Volume["height"]; // look up types
// type C = keyof Volume; // height | width

// type AreaString = {
//     height: string,
//     width: string
// }

// type AreaReadonly = {
//     readonly height: number,
//     readonly width: number
// }

// const rectangularArea: AreaReadonly = {
//     height: 20,
//     width: 12
// }

// type Area<T> = {
//     // [key in keyof Volume] : Volume[key]; // Volume["height"] -> number
//     readonly [key in keyof T] : T[key];
// }

// const area1: Area<{height: number, width: number}> = {
//     height: 12,
//     width: 10
// }