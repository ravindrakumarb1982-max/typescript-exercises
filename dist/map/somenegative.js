"use strict";
function finfNegativeNumber(arr) {
    return arr.some(num => num < 0);
}
const myNegativeNumber = [1, 2, 0];
const printNegativeNumberResult = finfNegativeNumber(myNegativeNumber);
console.log("Negative number is present: " + printNegativeNumberResult);
