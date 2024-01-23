`Write a function that checks if all elements in an array are positive using the every method.`
function areNumberPositive(numbers:number[]):boolean{
    return numbers.every((num)=>num>0)
}
var numArray:number[]=[24,78,-87]
console.log(areNumberPositive(numArray))