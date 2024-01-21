"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q11
function averageSum(num) {
    var sum = 0;
    for (let index = 0; index < num.length; index++) {
        (sum += num[index]), 10;
    }
    return sum / 10;
}
let averagesum = [20, 90, 80, 60, 66];
console.log(averageSum(averagesum));
