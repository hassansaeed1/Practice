var score =prompt("what is your score" )
score=parseInt(score)
if(score > 90){
    console.log("Grade A")
}else if (score > 80){
    console.log("Grade B")
}else{
    console.log("fail")
}
  
var score=80
if(score > 90){
    console.log("Grade A")
    if(score > 90){
        console.log("reward $100")
    }
}else if(score <80){
    console.log("Grade B")
    if(score<80){
        console.log("gift $80")
    }
}else if(score<70){
    console.log("Grade C")
    if (score<70){
       console.log("gift 50")
    }
}else{
    console.log("fail")
}



