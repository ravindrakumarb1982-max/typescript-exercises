"use strict";
function positiveNumber(arr) {
    return arr.every(num => num >= 0);
}
const myPositiveNumber = [1, 2, 0];
const printPositiveNumberResult = positiveNumber(myPositiveNumber);
console.log(printPositiveNumberResult);
