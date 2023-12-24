/*
question 24
More Conditional Tests: You don’t have to limit the number of tests you
 create to 10. If you want to try more comparisons, write more tests. Have at
  least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/


var car3: string = "honda city";
console.log("favcar==honda City");
console.log(car3 == "honda city");

var car34: string = "honda city";
console.log("car34==Rebirth");
console.log(car34 != "honda city");

var person: string = "UMEO";
console.log("bestfriend ==UMER");
console.log(person.toLowerCase() === "umer");

var age: number = 20;
console.log("age==25");
console.log(age == 25);

var age2: number = 20;
console.log("age2!=25");
console.log(age2 != 25);

var age: number = 26;
console.log("age<25");
console.log(age < 25);

var age: number = 26;
console.log("age>25");
console.log(age > 25);

var age: number = 36;
console.log("age>=40");
console.log(age >= 40);

var age: number = 36;
console.log("age<=40");
console.log(age <= 40);

var num: number = 56;
var k :boolean= num >= 65 && num <= 95;
console.log(k);

var num: number = 56;
var P: boolean = num >= 45 || num <= 60;
console.log(P);

var array:number[]=[1,14,10,25,25,22]
var mainNumber=13
if(array.includes(mainNumber)){
    console.log("in Array")
}else{
    console.log("not in array")
}

