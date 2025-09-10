
interface User {
    intName: string;
    intAge: number;
}

interface Admin extends User {
    intAdmin: boolean;
}

const person: Admin = {
    intName: "Ravi",
    intAge: 43,
    intAdmin: true
};

console.log(person);