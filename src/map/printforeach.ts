function printForEachElement(arr: string[]): void {
    arr.forEach((item, index) => {
        console.log(`Items ${index}: ${item}`);
    });
}

const fruits = ['apple', 'banana', 'cherry'];
printForEachElement(fruits);
