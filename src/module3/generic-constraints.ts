// generic constrains
interface MandatoryTypes{
    name: string, 
    age: number, 
    salary: number
};

const addMeToMyCrushMind = <T extends MandatoryTypes>(myDetails: T) => {
    const myCrush = "Pratishruti";
    const newData = {...myDetails, myCrush};
    return newData;
}

interface MyDetailsInterface{
    name: string,
    age: number,
    salary: number,
    other1: boolean
}

const myDetails: MyDetailsInterface = {
    name: "Raj Das",
    age: 25,
    salary: 50000,
    other1: true
}

const finalData = addMeToMyCrushMind(myDetails);