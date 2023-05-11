"use strict";
// // modify my access -> access modifier
// class BankAccount{
//     id: number;
//     name: string;
//     protected _balance: number;
//     constructor(id: number, name: string, balance: number){
//         this.id = id;
//         this.name = name;
//         this._balance = balance;
//     }
//     getBalance(){
//         console.log(`My current balance is ${this._balance}`);
//     }
//     addDeposit(depositAmount: number){
//         this._balance = this._balance + depositAmount;
//     }
// }
// class StudentAccount extends BankAccount{
//     test(){
//         this._balance // private modifier don't allow this
//     }
// }
// const myAccount = new BankAccount(106292,"Raj", 500);
// // myAccount._balance = 0;
// console.log("my account", myAccount);
