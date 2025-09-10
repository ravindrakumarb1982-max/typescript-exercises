function sumOfEvenNumber(n: number): number {
    let sum: number = 0;
    for (let i: number = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

let num: number = 20;
console.log("Entered Number: " + num);
console.log("Sum of Even Number: " + sumOfEvenNumber(num));