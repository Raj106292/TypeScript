// normal function
// default parameter
function addTwoNumber(num1: number, num2: number = 20): number {
    return num1 + num2;
};

addTwoNumber(2, 2);

// arrow function
const addTwoNumberInArrowFunction = (num1: number, num2: number): number => num1 + num2;

// callback function
const arr: number[] = [1, 4, 5];
const newArr = arr.map((num: number) => num * num);

// method
const person: {
    name: string,
    balance: number,
    addBalance(money: number): string
} = {
    name: 'Raj',
    balance: 5,
    addBalance(money: number) {
        return `My new balance is ${this.balance + money}`;
    }
}

// spread operator
const friends = ["Miller", "David", "Michel", "Johnson"];
const newFriends = ["Rose", "Lilly", "Rachel", "Wanda"];

friends.push(...newFriends);
// console.log(friends);

// rest operator
const greetFriends = (...friends: string[]): void => friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
});
greetFriends('Bul', 'Babul', 'Kabul', 'Korim', 'Rahim');

// array destructuring
const [bestFriend] = friends;

// object destructuring
const myBestFriend = {
    fullName: 'Avishek',
    age: 25,
}

const { fullName } = myBestFriend;