"use strict";
/*Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by
 anyone show output accordingly.*/
function checkDivisibility(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "The number is divisibly by both 3 and 5";
    }
    else if (number % 3 == 0) {
        return "The number is only divisible on 3";
    }
    else if (number % 5 == 0) {
        return "The number is only divisible on 5";
    }
    else {
        return "The number is not divisble on both";
    }
}
var num = 19;
var divisble = checkDivisibility(num);
console.log(divisble);
