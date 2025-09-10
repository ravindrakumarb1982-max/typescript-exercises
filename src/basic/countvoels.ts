function countVoels(input: string): number {
    let count: number = 0;
    for (let i: number = 0; i < input.length; i++) {
        const char = input[i].toLowerCase();
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
        }
    }
    return count;
}

let str = "My Name is Ravindra";
console.log("Entered String: " + str);
console.log("Number of voels in the strring: " + countVoels(str));