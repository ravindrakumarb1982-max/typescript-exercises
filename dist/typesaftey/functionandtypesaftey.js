"use strict";
function typeSaftyAddNumber(num) {
    let c = num.a + num.b;
    return c;
}
const printAddnumber = typeSaftyAddNumber({ a: 4, b: 7 });
console.log("Sum of two number: " + printAddnumber);
function sumNumber(...extNum) {
    return extNum.reduce((acc, val) => acc + val, 0);
}
const mySumNumber = [1, 2, 3, 4, 5, 6];
console.log("Sum of given Number: " + sumNumber(...mySumNumber));
function printUserInfo(user, defaultAge = 18) {
    const ageToPrint = user.age !== undefined ? user.age : defaultAge;
    console.log("Name: " + user.myName);
    if (user.age !== undefined) {
        console.log("Age: " + user.age);
    }
    else {
        console.log("User default Age: " + ageToPrint);
        console.log("User Age is not Provided!!!");
    }
}
const user1 = { myName: "Ravindra", age: 43 };
const user2 = { myName: "Kumar" };
printUserInfo(user1);
printUserInfo(user2);
