"use strict";
class ClassPerson {
    #firstName;
    #lastName;
    #age;
    constructor(firstName, lastName, age) {
        this.#firstName = firstName; // First name is private and unchangeable
        this.#lastName = lastName;
        this.#age = age;
    }
    // Getter for firstName
    get firstName() {
        return this.#firstName;
    }
    // Getter for lastName
    get lastName() {
        return this.#lastName;
    }
    // Setter for lastName
    set lastName(newLastName) {
        this.#lastName = newLastName;
    }
    // Getter for age
    get age() {
        return this.#age;
    }
    // Setter for age
    set age(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this.#age = newAge;
        }
        else {
            throw new Error('Age must be a positive number');
        }
    }
}
// Example usage:
const clperson = new ClassPerson('John', 'Doe', 30);
console.log(clperson.firstName); // John
console.log(clperson.lastName); // Doe
console.log(clperson.age); // 30
clperson.lastName = 'Smith';
console.log(clperson.lastName); // Smith
clperson.age = 35;
console.log(clperson.age); // 35
// person.firstName = 'Mike'; // Error: Cannot set property because there is no setter
