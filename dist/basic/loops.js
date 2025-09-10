"use strict";
function sumOfEvenNumber(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
let num = 20;
console.log("Entered Number: " + num);
console.log("Sum of Even Number: " + sumOfEvenNumber(num));
