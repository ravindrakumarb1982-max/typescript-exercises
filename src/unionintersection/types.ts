type Person = {
    name: string;
    age: number;
}

type TypeEmployee = {
    id: number;
    designation: string;
}

type TypeWorker = TypeEmployee & Person;

const typeWorker: TypeWorker = {
    name: "Ravindra",
    age: 43,
    id: 12485,
    designation: "Tester"
};

console.log("Worker Details: " + typeWorker);
