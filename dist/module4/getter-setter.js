"use strict";
// modify my access -> access modifier
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // getter
    get balance() {
        return this._balance;
    }
    // setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
}
class StudentAccount extends BankAccount {
    test() {
        // this._balance // private modifier don't allow this
    }
}
const myAccount = new BankAccount(106292, "Raj", 600);
// myAccount.addDeposit(20);
// myAccount.getBalance();
console.log(myAccount.balance);
myAccount.deposit = 400;
console.log('after deposit', myAccount.balance);
