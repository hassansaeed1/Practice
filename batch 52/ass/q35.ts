/*Animals: Think of at least three different animals that have a common characteristic.

Store the names of these animals in a list, and then use a for loop to print out the name

of each animal. • Modify your program to print a statement about each animal, such as A 
  dog would make a great pet. • Add a line at the end of your program stating what these
   animals have in common. You could print a sentence such as Any of these animals would 
   make a great pet!*/

   var animal:string[]=["Dog","cat","lion"]
   for(let index3=0;index3<animal.length;index3++){
    console.log(`${animal[index3]}`)
   }
   for(let index4=0;index4<animal.length;index4++){
    console.log(`A ${animal[index4]} would make a great pet`)
   }
   console.log("Any of these animals would make a great pet")