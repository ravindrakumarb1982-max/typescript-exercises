export function convertToUpperCase(arr: string[]): string[] {
    return arr.map(str => str.toUpperCase());
}

const lowerCaseArray: string[] = ["Ravi", "Ditya", "Krupa", "Lalitha"];
const upperCaseArray = convertToUpperCase(lowerCaseArray);
console.log(upperCaseArray);