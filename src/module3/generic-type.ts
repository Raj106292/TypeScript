// generic type
type GenericArray<T> = Array<T> // we don't know the type of the array

const allRolls1: GenericArray<number> = [44, 54, 64];
const allRolls2: GenericArray<string> = ["44", "54", "64"];
const isItRoll: GenericArray<boolean> = [true, false];
const userNameAndRoll: GenericArray<{ name: string, roll: number }> = [{
    name: "Rahim",
    roll: 1,
},
{
    name: "Karim",
    roll: 2,
}];

type GenericTupleArray<X, Y> = [X, Y];
const boyFriendGirlFriend: GenericTupleArray<string, string> = ["Raj", "Pratishruti"];