"use strict";
function sumOfNumber(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}
const myReducedNumbers = [1, 2, 3, 4, 5];
console.log(sumOfNumber(myReducedNumbers));
