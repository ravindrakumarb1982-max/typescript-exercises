import { differenceInYears, differenceInDays } from 'date-fns';

class DatePerson {
    #dateOfBirth: Date;

    constructor(dateOfBirth: string) {
        this.#dateOfBirth = new Date(dateOfBirth);
    }

    // Function to calculate current age using date-fns
    getCurrentAge(): number {
        return differenceInYears(new Date(), this.#dateOfBirth);
    }

    getDaysUntilNextBirthday(): number {
        const today = new Date();
        const currentYear = today.getFullYear();
        // Set next birthday to this year's birthday date
        let nextBirthday = new Date(currentYear, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        // If this year's birthday has already passed, use next year's date
        if (nextBirthday < today) {
            nextBirthday = new Date(currentYear + 1, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        }
        // Calculate the difference in days using date-fns
        const days = differenceInDays(nextBirthday, today);
        console.log(`There are ${days} days until the next birthday.`);
        return days;
    }

    // Function to calculate days since the last birthday
    getDaysSinceLastBirthday(): number {
        const today = new Date();
        const currentYear = today.getFullYear();
        let lastBirthday = new Date(currentYear, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        if (lastBirthday > today) {
            // If this year's birthday hasn't occurred yet, last birthday was in the previous year.
            lastBirthday = new Date(currentYear - 1, this.#dateOfBirth.getMonth(), this.#dateOfBirth.getDate());
        }
        const daysSinceLastBirthday = differenceInDays(today, lastBirthday);
        console.log(`It has been ${daysSinceLastBirthday} days since the last birthday.`);
        return daysSinceLastBirthday;
    }
}

// Example usage:
const person = new DatePerson('1982-01-17');
console.log(person.getCurrentAge());  // Calculates and returns current age
console.log('Days until next birthday:', person.getDaysUntilNextBirthday());
console.log('Days since last birthday:', person.getDaysSinceLastBirthday());