"use strict";
/*
question 15
Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone
  else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your
 program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name
 of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in
 your list.
*/
var guesst = ["Hassan", "Zaeem", "Umer"];
for (let H = 0; H < guesst.length; H++) {
    console.log(`${guesst[H]} Come to my home for a dinner`);
}
//change guest list
var removedguesst = "Hassan";
console.log(`${removedguesst} can't make it `);
var removedguesstIndex = guesst.indexOf(removedguesst);
guesst[removedguesstIndex] = "numan";
for (let p = 0; p < guesst.length; p++) {
    console.log(`you are still invited for dinner ${guesst[p]}`);
}
