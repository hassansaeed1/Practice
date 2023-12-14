/*Write a program that takes the number of units consumed by a user if it is greater than 100 then
 add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% 
of tax Where the tax amount will be calculated by the amount of bill.*/

function calculateBill(units:number){
    let bill =0
    if(units>500){
        bill +=(units-500)*0.25;
        units=500
    }
    if(units>200){
        bill+=(units-200)*0.15
        units=200
    }
    if(units>100){
        bill+=(units-100)*0.1
        units=100
    }
    bill+= units
    return bill
}

var units=250
var bill=calculateBill(units)
console.log(`The bill amount is ${bill}`)
