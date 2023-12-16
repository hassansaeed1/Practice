/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array.*/

 function show_magicians(magicians:string[]){
    for(let index=0;index<magicians.length;index++){
        console.log(`Magician ${index+1}: ${magicians[index]}`)
    }
 }

 var magician=["hassan sheikh","hamid sheikh","muzamal sheikh"]
 show_magicians(magician)