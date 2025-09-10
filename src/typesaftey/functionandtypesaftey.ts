interface interNum {
    a: number;
    b: number;
}

function typeSaftyAddNumber(num: interNum): number {
    let c: number = num.a + num.b;
    return c
}

const printAddnumber: number = typeSaftyAddNumber({ a: 4, b: 7 });
console.log("Sum of two number: " + printAddnumber);

function sumNumber(...extNum: number[]): number {
    return extNum.reduce((acc, val) => acc + val, 0)
}

const mySumNumber: number[] = [1, 2, 3, 4, 5, 6];
console.log("Sum of given Number: " + sumNumber(...mySumNumber));

interface TapUser {
    myName: string;
    age?: number;
}

function printUserInfo(user: TapUser, defaultAge: number = 18): void {
    const ageToPrint = user.age !== undefined ? user.age : defaultAge;
    console.log("Name: " + user.myName);
    if (user.age !== undefined) {
        console.log("Age: " + user.age);
    } else {
        console.log("User default Age: " + ageToPrint);
        console.log("User Age is not Provided!!!");
    }
}

const user1: TapUser = { myName: "Ravindra", age: 43 };
const user2: TapUser = { myName: "Kumar" };

printUserInfo(user1);
printUserInfo(user2);