"use strict";
function filterPositiveNumber(arr) {
    let positiveNumber = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumber.push(arr[i]);
        }
    }
    return positiveNumber;
}
let inputArray = [-5, 3, 0, 7, -1, 4];
const positiveOnly = filterPositiveNumber(inputArray);
console.log(positiveOnly);
