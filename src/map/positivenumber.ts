function positiveNumber(arr: number[]): boolean {
    return arr.every(num => num >= 0)
}

const myPositiveNumber: number[] = [1, 2, 0];
const printPositiveNumberResult = positiveNumber(myPositiveNumber);
console.log(printPositiveNumberResult); 