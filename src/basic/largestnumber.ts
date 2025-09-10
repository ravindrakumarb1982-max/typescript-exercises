function largestNumber(arr: number[]): number {
    if (arr.length === 0) {
        throw console.error("This is an empty Array!!");
    }
    let largest: number = arr[0];
    for (let i: number = 0; i <= arr.length; i++) {
        if (arr[i] < largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let mar: number[] = [24, 15, 68, 43]
console.log("Entered Numbers: " + mar);
console.log("Largest Number: " + largestNumber(mar));