// generic function -> arrow function
const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
    return [param1, param2];
};

// generic function -> normal function
function createArray1<X, Y>(param1: X, param2: Y): [X, Y] {
    return [param1, param2];
};

interface NameInterface {
    name: string
}

const result1 = createArray<string, string>("I love my country", "Bangladesh");
const result2 = createArray<boolean, Array<string>>(true, ["USA"]);
const result3 = createArray<NameInterface, string>({ name: "Bangladesh" }, "My Motherland");

// spread operator
const myInfo = {
    name: "Raj",
    age: 25,
    salary: 500000,
}

// const newData = {...myInfo, myCrush};

const addMyCrush = <T>(myInfo: T) => {
    const myCrush = "Pratishruti";
    const newData = {...myInfo, myCrush}
    return newData;
}

const result = addMyCrush(myInfo);