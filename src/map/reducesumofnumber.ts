function sumOfNumber(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
}

const myReducedNumbers: number[] = [1, 2, 3, 4, 5];
console.log(sumOfNumber(myReducedNumbers));