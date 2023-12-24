/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with
 a copy of the array of magicians’ names. Because the original array will be unchanged, return the 
 new array and store it in a separate array. Call show_magicians() with each array to show that you 
 have one array of the original names and one array with the Great added to each magician’s name.*/

function make_great(Magicians: string[]) {
  let great_magicians: string[] = [];
  for (let index = 0; index < Magicians.length; index++) {
    great_magicians[index] = "The Great " + Magicians[index];
  }
  return great_magicians;
}

function show_magicians(Magicians: string[]) {
  console.log(Magicians);
}

var Magicians: string[] = ["hassan sheikh", "zain sheikh", "hussain sheikh"];
show_magicians(Magicians);
let great_magicians: string[] = make_great(Magicians);
show_magicians(great_magicians);
