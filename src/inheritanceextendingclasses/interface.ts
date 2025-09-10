import { differenceInYears } from 'date-fns';

// The Organism interface requires a public getter for the date of birth.
interface Organism {
    getDateOfBirth(): Date;
}

// Person implements Organism and uses protected properties so that child classes can access them.
class Person implements Organism {
    protected firstName: string;
    protected lastName: string;
    protected dateOfBirth: Date;

    constructor(firstName: string, lastName: string, dateOfBirth: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }

    // Public method required by Organism.
    public getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    // Calculate the current age using date-fns.
    public getCurrentAge(): number {
        return differenceInYears(new Date(), this.dateOfBirth);
    }
}

// Employee extends Person and adds a private salary property.
class Employee extends Person {
    private salary: number;

    constructor(firstName: string, lastName: string, dateOfBirth: string, salary: number) {
        super(firstName, lastName, dateOfBirth);
        this.salary = salary;
    }

    // Function to print all information about the Employee.
    public printInformation(): void {
        console.log(`Employee Information:`);
        console.log(`Name: ${this.firstName} ${this.lastName}`);
        console.log(`Date of Birth: ${this.dateOfBirth.toDateString()}`);
        console.log(`Age: ${this.getCurrentAge()}`);
        console.log(`Salary: ${this.salary}`);
    }
}

// Example usage:
const emp = new Employee('John', 'Doe', '1982-01-17', 50000);
emp.printInformation();
