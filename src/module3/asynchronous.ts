// asynchronous -> promise (resolved/ pending/ rejected)

// mocking
const makePromiseString = (): Promise<string> => {
    return new Promise<string>((resolved, reject) => {
        const data: string = "Data is fetched";
        if (data) {
            resolved(data);
        } else {
            reject("Failed to fetch data");
        }
    });
};

const getPromiseDataString = async (): Promise<string> => {
    const data = await makePromiseString();
    return data;
}

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolved, reject) => {
        const data: boolean = true;
        if (data) {
            resolved(data);
        } else {
            reject("Failed to fetch data");
        }
    });
};

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
}

type DataType = {
    name: string,
    salary: number
}

const makePromiseObject = (): Promise<DataType> => {
    return new Promise<DataType>((resolved, reject) => {
        const data: DataType = { name: "Raj", salary: 50000 };
        if (data) {
            resolved(data);
        } else {
            reject("Failed to fetch data");
        }
    });
};

const getPromiseDataObject = async (): Promise<DataType> => {
    const data = await makePromiseObject();
    return data;
}

// fetching from JSON placeholder
interface IToDo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const getTodo = async(): Promise<IToDo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await response.json();
}

const getToDoData =async ():Promise<void> => {
    const result = await getTodo();
    console.log(result);
}

getToDoData();