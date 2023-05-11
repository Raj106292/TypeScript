import average  from './module';
import methods from './utils/index';

const addNumber = (num1: number, num2: number, num3: number): number => {
    return num1 + num2 + num3;
}

const res1 = methods.addNumber2(4, 6);
const res2 = average(8, 12);