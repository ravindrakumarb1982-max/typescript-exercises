"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
class DatePerson {
    #dateOfBirth;
    constructor(dateOfBirth) {
        this.#dateOfBirth = new Date(dateOfBirth);
    }
    // Function to calculate current age using date-fns
    getCurrentAge() {
        return (0, date_fns_1.differenceInYears)(new Date(), this.#dateOfBirth);
    }
    getDaysUntilNextBirthday() {
        const today = new Date();
        const currentYear = today.getFullYear();
        // Set next birthday to this year's birthday date
        let nextBirthday = new Date(currentYear, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        // If this year's birthday has already passed, use next year's date
        if (nextBirthday < today) {
            nextBirthday = new Date(currentYear + 1, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        }
        // Calculate the difference in days using date-fns
        const days = (0, date_fns_1.differenceInDays)(nextBirthday, today);
        console.log(`There are ${days} days until the next birthday.`);
        return days;
    }
    // Function to calculate days since the last birthday
    getDaysSinceLastBirthday() {
        const today = new Date();
        const currentYear = today.getFullYear();
        let lastBirthday = new Date(currentYear, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        if (lastBirthday > today) {
            // If this year's birthday hasn't occurred yet, last birthday was in the previous year.
            lastBirthday = new Date(currentYear - 1, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        }
        const daysSinceLastBirthday = (0, date_fns_1.differenceInDays)(today, lastBirthday);
        console.log(`It has been ${daysSinceLastBirthday} days since the last birthday.`);
        return daysSinceLastBirthday;
    }
}
// Example usage:
const person = new DatePerson('1982-01-17');
console.log(person.getCurrentAge()); // Calculates and returns current age
console.log('Days until next birthday:', person.getDaysUntilNextBirthday());
console.log('Days since last birthday:', person.getDaysSinceLastBirthday());
