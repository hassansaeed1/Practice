/* - Write a program that calculates the percentage.*/
function calculatesThePercentage(number:number,percent:number){
    return (percent/100)*number
}

var number:number=75
var percent:number=35
console.log(`${percent}% of${number} is ${calculatesThePercentage(number,percent)}`)


