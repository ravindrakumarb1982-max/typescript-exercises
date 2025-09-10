function printUserInformation(info: string | number): void {
    if (typeof info === "number") {
        console.log("I Only know the Age: " + info);
    } else if (typeof info === "string") {
        console.log("I only know the Name: " + info);
    }
}

printUserInformation(43);
printUserInformation("Ravindra");