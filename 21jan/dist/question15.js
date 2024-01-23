"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
`Write a function that checks if all elements in an array are positive using the every method.`;
function areNumberPositive(numbers) {
    return numbers.every((num) => num > 0);
}
var numArray = [24, 78, -87];
console.log(areNumberPositive(numArray));
