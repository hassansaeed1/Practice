"use strict";
/*
question 22
Intentional Error: If you haven’t received an array index error in one of your
 programs yet, try to make one happen. Change an index in one of your programs
 to produce an index error. Make sure you correct the error before closing the
  program.
*/
var error = ["Hamid", "Hassan", "Muzammil", "Numan", "zaeem"];
for (let jj = 0; jj < error.length; jj++) {
    console.log(`${error[jj]}`);
}
error.push("zain");
console.log(error);
