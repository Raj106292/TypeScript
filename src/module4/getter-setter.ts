// modify my access -> access modifier
class BankAccount{
    id: number;
    name: string;
    private _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }

    // getter
    get balance(): number{
        return this._balance
    }

    // setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }

    getBalance(): number{
        return this._balance;
    }

    // addDeposit(depositAmount: number){
    //     this._balance = this._balance + depositAmount;
    // }
}

class StudentAccount extends BankAccount{
    test(){
        // this._balance // private modifier don't allow this
    }
}

const myAccount = new BankAccount(106292,"Raj", 600);
// myAccount.addDeposit(20);
// myAccount.getBalance();
console.log(myAccount.balance);
myAccount.deposit = 400;
console.log('after deposit', myAccount.balance);