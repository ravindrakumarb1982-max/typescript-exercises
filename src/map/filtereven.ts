function filterEvenNumber(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}

function filterOddNumber(arr: number[]): number[] {
    return arr.filter(num => num % 2 !== 0);
}

const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = filterEvenNumber(mynumbers);
const odd = filterOddNumber(mynumbers);
console.log("Even Numbers: " + evens);
console.log("Odd Numbers: " + odd);