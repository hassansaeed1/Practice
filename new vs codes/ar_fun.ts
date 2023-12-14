//Arrow Functions

let sum1=(a:number,b:number):number=>{
return a*b
}
sum1(26,4)
console.log(sum1(26,4))

let sum2=(a:number,b:number)=>a**b
sum2(3,4)

console.log(sum2(3,4))

let sum3=(a:number,b:number)=>a/b
sum3(7,2)

let sum4=(a:number,b:number)=>a+b
sum4(2,4)
console.log(sum1(26,4),sum2(3,4),sum3(7,2),sum4(2,4))
