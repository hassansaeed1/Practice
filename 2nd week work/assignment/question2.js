"use strict";
/* - Write a program that calculates the percentage.*/
function calculatesThePercentage(number, percent) {
    return (percent / 100) * number;
}
var number = 75;
var percent = 35;
console.log(`${percent}% of${number} is ${calculatesThePercentage(number, percent)}`);
