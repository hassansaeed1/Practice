/*Large Shirts: Modify the make_shirt() function so that shirts are
 large by default with a message 
that reads I love TypeScript. Make a large shirt and a medium shirt
 with the default message, and
 a shirt of any size with a different message.*/

 function make_shirt2(size:string = "large",message:string="I love TypeScript"){
   console.log(`The shirt size is ${size} the message that print on it is "${message}"`)  
 }
 make_shirt2();
 make_shirt2("M")
 make_shirt2("S" ,"The boys");
