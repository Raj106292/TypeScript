"use strict";
// normal function
// default parameter
function addTwoNumber(num1, num2 = 20) {
    return num1 + num2;
}
;
addTwoNumber(2, 2);
// arrow function
const addTwoNumberInArrowFunction = (num1, num2) => num1 + num2;
// callback function
const arr = [1, 4, 5];
const newArr = arr.map((num) => num * num);
// method
const person = {
    name: 'Raj',
    balance: 5,
    addBalance(money) {
        return `My new balance is ${this.balance + money}`;
    }
};
// spread operator
const friends = ["Miller", "David", "Michel", "Johnson"];
const newFriends = ["Rose", "Lilly", "Rachel", "Wanda"];
friends.push(...newFriends);
// console.log(friends);
// rest operator
const greetFriends = (...friends) => friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
});
greetFriends('Bul', 'Babul', 'Kabul', 'Korim', 'Rahim');
// array destructuring
const [bestFriend] = friends;
// object destructuring
const myBestFriend = {
    fullName: 'Avishek',
    age: 25,
};
const { fullName } = myBestFriend;
