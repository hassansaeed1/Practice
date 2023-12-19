/* Create a function that takes a positive integer as parameter and uses a for loop to calculate and return
 the factorial of that number.*/

 function factorial(num:number){
    let reults=1
    for(let index=2;index<=num;index++){
        reults*=index
    }
    return reults
 }
 let num:number= 5
 console.log(`The factorial of ${num} is ${factorial(num)}`)
