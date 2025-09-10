"use strict";
function findTheGreatestNumber(arr) {
    const found = arr.find(num => num > 10);
    if (found === undefined) {
        console.log("There are not number greater than 10");
        throw console.log("There are not number greater than 10");
    }
    return found;
}
function findAllNumbersGreaterThan(arr) {
    return arr.filter(num => num > 10);
}
const findFirstGreaterThan10 = [3, 8, 10, 11, 17, 5];
const printTheFirstGreaterNumberThan10 = findTheGreatestNumber(findFirstGreaterThan10);
const printAllTheFirstGreaterNumberThan10 = findAllNumbersGreaterThan(findFirstGreaterThan10);
console.log("First number greater than 10: " + printTheFirstGreaterNumberThan10);
console.log("All the number greater than 10: " + printAllTheFirstGreaterNumberThan10);
if (findFirstGreaterThan10 !== undefined) {
    console.log(findFirstGreaterThan10);
}
