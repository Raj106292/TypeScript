"use strict";
class Counter {
    // constructor(counter: number){
    //     this.counter = counter;
    // }
    static increment() {
        return (Counter.counter = Counter.counter + 1);
    }
    static decrement() {
        return (Counter.counter = Counter.counter - 1);
    }
}
Counter.counter = 0;
// const instance1 = new Counter();
// const instance2 = new Counter();
console.log(Counter.increment()); // 0+1 -> 1
console.log(Counter.increment()); // 1+1 -> 2
