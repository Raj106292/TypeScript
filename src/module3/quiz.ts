//quiz - 04
// function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key:K){
//     const item = arr[index];
//     return item[key];
// }

// const users = [{name: 'John', age: 30}, {name: 'Mary', age: 25}];
// console.log(getArrayItem(users, 0, 'name'));

// quiz - 06
// type Data = {
//     num1: number;
// }

// type E = {
//     [key in keyof Data]: string;
// }

// const allNumbers: E = {
//     num1: 20
// }

// quiz - 07
// interface Person{
//     firstName: string,
//     lastName: string
// }

// function fullNameInQuiz<T extends Person>(person: T): string{
//     return `${person.firstName} ${person.lastName}`;
// }