/*Create a function that takes an array of numbers as parameter. Use a for loop to calculate and return
 the sum of all the numbers in the array.*/

 function sumArray(arr:number[]){
    let sum=0
    for(let index=0;index<arr.length;index++){
        sum +=arr[index]
    }
    return sum
 }

 var arr:number[]=[1,14,10,25,22]
 var reults=sumArray(arr)
 console.log(`The sum of the array is ${reults}`)

 export{}

 