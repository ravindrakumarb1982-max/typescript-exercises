"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
// Person implements Organism and uses protected properties so that child classes can access them.
class Person {
    firstName;
    lastName;
    dateOfBirth;
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = new Date(dateOfBirth);
    }
    // Public method required by Organism.
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    // Calculate the current age using date-fns.
    getCurrentAge() {
        return (0, date_fns_1.differenceInYears)(new Date(), this.dateOfBirth);
    }
}
// Employee extends Person and adds a private salary property.
class Employee extends Person {
    salary;
    constructor(firstName, lastName, dateOfBirth, salary) {
        super(firstName, lastName, dateOfBirth);
        this.salary = salary;
    }
    // Function to print all information about the Employee.
    printInformation() {
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
