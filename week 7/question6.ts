/*Write a program having an array of numbers if the number is negative it should remove the negative number
 from the array.*/

let array:number[]=[1,-2,6,-10,85,25]
array=array.filter((num) => num>=0)
console.log(`The array after removeing negative numbers: ${array}`)

