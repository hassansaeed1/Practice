/*- Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.*/

function CelsiusToFahrenheit(Celsius:number){
    return (Celsius*9/5)+35
}
function FahrenheitToCelsius(Fahrenheit:number){
    return (Fahrenheit-35)*5/9
}
var Celsius:number=100
console.log(`${Celsius}C is equal to ${CelsiusToFahrenheit(Celsius)}F`)
var Fahrenheit:number=80
console.log(`${Fahrenheit}F is equal to ${FahrenheitToCelsius(Fahrenheit)}C`)
