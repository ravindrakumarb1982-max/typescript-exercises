"use strict";
// import { convertToUpperCase } from "./uppercase"
function nameWithLetterA(arr) {
    return arr.filter(str => str.startsWith("A"));
}
const lowerCaseName = ["Ravi", "Aditya", "Ditya", "Krupa", "Lalitha", "Anita"];
const myNameWithLetterA = nameWithLetterA(lowerCaseName);
console.log(myNameWithLetterA);
