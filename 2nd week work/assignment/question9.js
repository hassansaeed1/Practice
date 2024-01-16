"use strict";
/* Develop a program that determines the day of the week. Ask the user for a number (1-7) and use
nested if statements to print the corresponding day's name.*/
function getDaysWeeks(daysNumber) {
    if (daysNumber == 1) {
        return "Monday";
    }
    else if (daysNumber === 2) {
        return "Tuesday";
    }
    else if (daysNumber === 3) {
        return "Wednesday";
    }
    else if (daysNumber === 4) {
        return "Thursday";
    }
    else if (daysNumber === 5) {
        return "Friday";
    }
    else if (daysNumber === 6) {
        return "Saturday";
    }
    else if (daysNumber === 7) {
        return "Sunday";
    }
    else {
        return "The number is invalid please enter a number between 1 and 7";
    }
}
var daysNumber = 5;
var daysOfWeeks = getDaysWeeks(daysNumber);
console.log(daysOfWeeks);
