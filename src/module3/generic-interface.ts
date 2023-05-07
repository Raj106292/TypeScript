interface ISalaryOfBoyFriendType {
    name: string,
    salary: number
}
const salaryOfBoyFriend: GenericTupleArray<ISalaryOfBoyFriendType, string> = [{ name: "Raj", salary: 40000 }, "Pratishruti"];

interface CrushDataInterface<T, U = undefined> {
    name: string,
    age: number,
    isMarried: boolean,
    husband?: T,
    boyfriend?: U
}

interface PersonInterface {
    name: string,
    job: string,
    age: number,
    salary?: number,
}

const firstCrush: CrushDataInterface<boolean> = {
    name: "Soumitrisha",
    age: 22,
    isMarried: false,
    husband: false,
}

const secondCrush: CrushDataInterface<string> = {
    name: "Dipika",
    age: 35,
    isMarried: true,
    husband: "Ranveer"
}

const thirdCrush: CrushDataInterface<PersonInterface> = {
    name: "Katrina",
    age: 50,
    isMarried: true,
    husband: {
        name: "Vicky",
        job: "Actor",
        age: 50,
        salary: 200000
    }
}

const fourthCrush: CrushDataInterface<PersonInterface, PersonInterface> = {
    name: 'Alia',
    age: 26,
    isMarried: true,
    husband: {
        name: "Avik",
        age: 32,
        job: "Engineer"
    },
    boyfriend: {
        name: "Joy",
        age: 28,
        job: "Doctor"
    }
}