"use strict";
/*Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each
 temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in
  an array. Use a for loop to perform the conversion for each temperature.*/
function celciusTemprature(celcius) {
    let fahrenheit = [];
    for (let i = 0; i < celcius.length; i++) {
        let fahrenheitTempprature = (celcius[i] * 9 / 5) + 32;
        fahrenheit.push(fahrenheitTempprature);
    }
    return fahrenheit;
}
let tempreaturInCelcius = [10, 20, 23, 17];
let fahrenheitTempprature = celciusTemprature(tempreaturInCelcius);
console.log(`Celcius Temprature:`, tempreaturInCelcius);
console.log(`Celcius Converted To Fahrenheit:`, fahrenheitTempprature);
