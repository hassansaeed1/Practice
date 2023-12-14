var number=parseInt(prompt("write your number"))
var itsprime=true;
for(var e=2;e<number;e++){
    var result=number%e
    if (result==0)
    console.log("number is not a prime number"+number+" e "+e)
itsprime==false
break; 
}
if(itsprime){
    console.log("the number is prime"+number)
}