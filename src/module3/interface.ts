// type alias
type User = {
    name: string,
    age: number,
};

const userWithTypeAlias: User = {
    name: "Type Alias",
    age: 100
}

type AExtendedUser = User & {
    roll: string;
}

const userWithAliasExtended: AExtendedUser = {
    name: "Alias Extended",
    age: 150,
    roll: "4568"
}

// interface
interface IUser {
    name: string,
    age: number,
}

const userWithInterface: IUser = {
    name: "Interface",
    age: 200,
}

interface IExtendedUser extends IUser{
    roll: string;
}

const userWithInterfaceExtended: IExtendedUser = {
    name: "Interface",
    age: 200,
    roll: "4568"
}

// interface in function

type AddNumberType = (num1: number, num2: number) => number // type signature of function // recommended
const addNumbers: AddNumberType = (num1, num2) => num1 + num2;

interface IAddNumberType{
    (num1: number, num2: number): number
}
const IAddNumbers: IAddNumberType = (num1, num2) => num1 + num2;

// interface in array
type NumbersType = number[] // recommended
const numbers: NumbersType = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface INumbersType{
    [index: number]: number; // index signature
}
const INumbers: INumbersType = [11, 12, 13, 14, 15, 16, 17, 18, 19];