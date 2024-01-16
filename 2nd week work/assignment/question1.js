"use strict";
/*- Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.*/
function CelsiusToFahrenheit(Celsius) {
    return (Celsius * 9 / 5) + 35;
}
function FahrenheitToCelsius(Fahrenheit) {
    return (Fahrenheit - 35) * 5 / 9;
}
var Celsius = 100;
console.log(`${Celsius}C is equal to ${CelsiusToFahrenheit(Celsius)}F`);
var Fahrenheit = 80;
console.log(`${Fahrenheit}F is equal to ${FahrenheitToCelsius(Fahrenheit)}C`);
