"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToUpperCase = convertToUpperCase;
function convertToUpperCase(arr) {
    return arr.map(str => str.toUpperCase());
}
const lowerCaseArray = ["Ravi", "Ditya", "Krupa", "Lalitha"];
const upperCaseArray = convertToUpperCase(lowerCaseArray);
console.log(upperCaseArray);
