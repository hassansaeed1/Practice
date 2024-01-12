"use strict";
/*
question 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive
 in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message
 saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain
in your list. Each time you pop a name from your list, print a message to
that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know
they’re still invited.
*/
var guesst = ["Hassan", "Zaeem", "Umer"];
for (let a = 0; a < guesst.length; a++) {
    console.log(`${guesst[a]}come to my home for a dinner`);
}
var guesst = ["Hassan", "Zaeem", "Umer"];
for (let H = 0; H < guesst.length; H++) {
    console.log(`${guesst[H]} Come to my home for a dinner`);
}
var removedguesst = "Hassan";
console.log(`${removedguesst} can't make it `);
var removedguesstIndex = guesst.indexOf(removedguesst);
guesst[removedguesstIndex] = "numan";
for (let p = 0; p < guesst.length; p++) {
    console.log(`Come to my home for a dinner ${guesst[p]}`);
}
guesst.unshift("hamid");
guesst.splice(2, 0, "hussain");
guesst.push("zain");
for (let y = 0; y < guesst.length; y++) {
    console.log(`I found a bigger table ${guesst[y]} so please come to my home for a dinner`);
}
console.log("I  can invite only two people for dinner.");
while (guesst.length > 2) {
    var removegusest = guesst.pop();
    console.log(`${removegusest} sorry you can't come on dinner`);
}
console.log(`${guesst} you are still inivited`);
guesst.pop();
guesst.pop();
console.log(guesst);
/*

while ((guesst.length = 0)) {
  var removeall = guesst.pop();
  console.log(`${removeall}`);
}*/
