/*Create a function that takes an array, an index, and a value as parameters. Inside the function, use
 the splice method to insert the value at the specified index in the array. Return the modified arra*/
 function insertValue(arr:any[],index:number,value:any){
    arr.splice(index,0,value)
    return arr
 }
 let arr = [1,2,3,4,5]
let modifiedArray=insertValue(arr,2,`new value`)
console.log(modifiedArray)

