var Totalmarks=300
var Obtainedmarks=219
var percentage =(Obtainedmarks/Totalmarks)*100
console.log("Totalmarks :"+Totalmarks)
console.log("Obtainedmarks :"+Obtainedmarks)
console.log("percentage :"+ percentage)
if(percentage>=80){
    console.log("Grade :A one")
    if(percentage>=80){
        console.log("excellent")
    }
}
else if (percentage>=70){
    console.log("Grade :B")
    if(percentage>=70){
        console.log("Remarks :"+"Good")
    }
    
}
else if(percentage>=60){
    console.log("Grade :B")
    if(percentage>=60){
        console.log("need to improve")
    }
}
else if (percentage<60){
    console.log("Fail")
    if(percentage<60){
        console.log("sorry")
    }
}

