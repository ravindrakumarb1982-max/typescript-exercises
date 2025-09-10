let str: string;
let num: number;
let bol: boolean;
let myAny: any;

str = "Ravindra Kumar"
num = 56;
bol = true;
myAny = true;

console.log(`String: ${str} , Number: ${num} , Boolean: ${bol} , Any Type: ${myAny}`);


export function Add(a: number, b: number): number {
    let sum = a + b;
    return sum;
}

let a = 10;
let b = 25;

let userName: string = "Ravindra"

function MyFunction(): never {
    throw console.error("this error");

}


const person: [name: string, age: number] = ["Ravi", 43]
person[0] = "Ravindra";
person[1] = 55;

console.log('Name: ' + person[0] + "\nAge: " + person[1]);
console.log(person);
console.log(typeof person[0] + " " + typeof person[1])

let arr: number[] = [1, 2, 3, 4];
arr.push(5);
console.log(arr);
console.log(arr.length);

let srr: string[] = ["a", "b", "c", "d"];
srr.push("Ravi");
console.log("Add to the Array: " + srr);
srr.pop();
console.log("Remove from array: " + srr);

// Define an array with mixed types
const arra: (number | string | boolean)[] = [10, "hello", 3.14, true];

// Define a tuple with fixed types and length
const tup: [number, string, number, boolean] = [100, "world", 2.718, false];

// Function to print details for each element in a collection
function printElements(collection: any[]) {
    collection.forEach((element, index) => {
        console.log(`Index ${index}: Value = ${element}, Type = ${typeof element}`);
    });
    console.log(`Total number of elements: ${collection.length}`);
}

// Print information for the array
console.log("Array elements:");
printElements(arra);

// Print information for the tuple
console.log("\nTuple elements:");
printElements(tup);
