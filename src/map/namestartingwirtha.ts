// import { convertToUpperCase } from "./uppercase"

function nameWithLetterA(arr: string[]): string[] {
    return arr.filter(str => str.startsWith("A"))
}

const lowerCaseName: string[] = ["Ravi", "Aditya", "Ditya", "Krupa", "Lalitha", "Anita"];
const myNameWithLetterA = nameWithLetterA(lowerCaseName)
console.log(myNameWithLetterA);
