/*Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days*/

function convertsToweeksAndDays(days:number){
    var weeks=Math.trunc(days/7)
    var remainingDays=days % 7;
    return `${days} days= ${weeks} weeks and ${remainingDays} days`
}
console.log(`${convertsToweeksAndDays(17)}`)

