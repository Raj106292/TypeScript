export const addNumber = (num1, num2) => {
    return num1 + num2;
};
export const subtract = (num1, num2) => {
    if (num1 > num2) {
        return num1 - num2;
    }
    else {
        return num2 - num1;
    }
};
