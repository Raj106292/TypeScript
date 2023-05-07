let email: any;

email = "Next Level Web Development";
(email as string).length;
<string>email.length;

function convertKgToGram(param: string | number): string | number | undefined {
    if(typeof param === "string"){
        const value = parseFloat(param);
        return `${value}kg = ${value*1000}gram`;
    }
    if(typeof param === "number"){
        return `${param}kg = ${param*1000}gram`;
    }
}

const valueOfKgInNumber = convertKgToGram(15) as string;
console.log(valueOfKgInNumber);

type CustomErrorType = {
    message: string
}

try{
    console.log("Hello");
}catch(error){
    console.log((error as CustomErrorType).message);
}