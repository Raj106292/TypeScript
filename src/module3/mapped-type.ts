// run map method on the type
const arrayOfNumbers = [ 1, 2, 3];
const arrayOfStrings = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfStrings);

type Volume = {
    height: number,
    width: number,
    depth: number
}

type B = Volume["height"]; // look up types -> set type B as same as height type in Volume
type C = keyof Volume; // height | width -> union literal type

type AreaString = {
    height: string,
    width: string
}

type AreaReadonly = {
    readonly height: number,
    readonly width: number
}

const rectangularArea: AreaReadonly = {
    height: 20,
    width: 12
}

// rectangularArea.width = 10 // impossible because it is a readonly value

type Area<T> = {
    // [key in keyof Volume] : Volume[key]; // Volume["height"] -> number
    readonly [key in keyof T] : T[key];
}

const area1: Area<{height: number, width: string}> = {
    height: 12,
    width: "10"
}