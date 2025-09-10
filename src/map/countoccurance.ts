function countTheOccuranceOfValue(arr: number[], value: number): number {
    return arr.reduce((count, val) => (val === value ? count + 1 : count), 0);
}

console.log(countTheOccuranceOfValue([1, 2, 3, 2, 4, 2, 5, 1], 2));