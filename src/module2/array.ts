const names: string[] = ['raj', 'shuvo', 'kamol', 'akash', 'punob'];
const rollNumbers: number[] = [11, 22, 33, 44, 55];

rollNumbers.map(roll => roll.toFixed());
names.map(name => name.charAt(2))

const user: [number, string] = [106292, 'Raj']; //tuple

const differentTypes = ['apple', 'mango', 'banana', 88, 77, , true]; //union type
differentTypes[0] = 99;