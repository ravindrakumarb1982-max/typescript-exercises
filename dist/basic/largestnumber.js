"use strict";
function largestNumber(arr) {
    if (arr.length === 0) {
        throw console.error("This is an empty Array!!");
    }
    let largest = arr[0];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < largest) {
            largest = arr[i];
        }
    }
    return largest;
}
let mar = [24, 15, 68, 43];
console.log("Entered Numbers: " + mar);
console.log("Largest Number: " + largestNumber(mar));
