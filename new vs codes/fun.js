"use strict";
//function 
// Parameter type annotation
function greet(name = "hassan") {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("sheikh");
function greet1() {
    let greeting = "Hello!";
    return greeting;
}
greet1();
let ww = greet1();
console.log(ww);
function greet2(name) {
    console.log("Hey, " + name.toLowerCase() + "@@");
}
greet2("hassan");
function greet3() {
    let greeting = "hey!";
    return greeting;
}
greet3();
let aa = greet3();
console.log(aa);
function greet5(name = "sheikh") {
    let greeting = "hey";
    return greeting + ", " + name;
}
let bb = greet5("hassan");
console.log(bb);
function greet0(name = 69) {
    let greeting = 69;
    return greeting * name;
}
let bc = greet0(2);
console.log(bc);
function greet7() {
    console.log(50 * 25);
}
greet7(); //its wrong)
let sum0 = (aa, bb) => {
    return aa * bb;
};
console.log(sum0(25, 50));
sum0(25, 50);
//
function greet99() {
    return 25 * 25;
}
let ab = greet99();
console.log(ab);
//
let sum8 = (kk, ll) => kk * ll;
console.log(sum8(25, 50));
sum0(25, 50);
//practice
function greet90(name = "hassan") {
    let greeting = "sheikh";
    let greetings = "69";
    let greetinges = "gori";
    return greeting.toUpperCase() + " " + name.toLowerCase() + ", " + greetinges.toUpperCase() + " ";
}
let ba = greet90();
console.log(ba);
