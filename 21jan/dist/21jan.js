"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Q1
var named = "Hassan sheikh";
console.log(named);
//Q2
function numbers(x, y) {
    return x + y;
}
let sumnumber = numbers(58, 1);
console.log(sumnumber);
//Q3
var givennumber = 80;
if (givennumber % 2 == 0) {
    console.log(`The given number is even number`);
}
else if (givennumber % 2 !== 0) {
    console.log(`The given number is odd number`);
}
//Q4
function stringConcatenation(num1, num2) {
    return num1 + num2;
}
let fullName = stringConcatenation("Hassan", "Sheikh");
console.log(fullName);
//Q5
function areacalculator(width, lenght) {
    let areafind = width * lenght;
    console.log(areafind);
}
areacalculator(15, 7);
let booktype = {
    title: "matilda",
    author: "Roald dahl",
};
console.log(`The book title is ${booktype.title} and his author name is ${booktype.author}`);
var bookdetail = {
    bookname: "matilda",
    author: "roald dahl",
    topic: "The power of knowledge courage, and justice",
};
console.log(`Book name is ${bookdetail.bookname} and his author name is ${bookdetail.author} and the topic of ${bookdetail.bookname} is ${bookdetail.topic}`);
var persontype = {
    name: "Hassan Sheikh",
    age: 18,
    address: "main sabzar road lahore",
};
console.log(`The person name is ${persontype.name} and his age ${persontype.age} and his address is ${persontype.address}`);
//Q10
let fruit = ["orange", "mango", "grapes", "apple", "banana"];
for (let i = 0; i < fruit.length; i++) {
    console.log(`${fruit[i]}`);
}
//Q11
function averageSum(num) {
    var sum = 0;
    for (let index = 0; index < num.length; index++) {
        (sum += num[index]), 10;
    }
    return sum / 10;
}
let averagesum = [20, 90, 80, 60, 66];
console.log(averageSum(averagesum));
//Q12
var furits = { ["banana", "apple", "graps"]: +["mango", "orange"] };
