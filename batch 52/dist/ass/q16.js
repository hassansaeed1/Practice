"use strict";
/*
question 16
More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of
 your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest
 to the end of your list. • Print a new set of invitation messages, one for each
  person in your list.
*/
var guesst = ["Hassan", "Zaeem", "Umer"];
for (let a = 0; a < guesst.length; a++) {
    console.log(`${guesst[a]} come to my home for a dinner`);
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
