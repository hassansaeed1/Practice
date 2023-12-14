var math = parseInt(prompt("what is your math marks?"));
var english = parseInt(prompt("what is your english marks?"));
var chemistry = parseInt(prompt("what is your chemistry marks?"));
var Totalmarks = prompt("what is your totalmarks?");
var Obtainedmarks = parseInt(math + english + chemistry);
var percentage = (Obtainedmarks / Totalmarks) * 100;
alert("Totalmarks :" + Totalmarks);
alert("Obtainedmarks :" + Obtainedmarks);
alert("percentage :" + percentage);
if (percentage >= 80) {
  alert("Grade: A one");

  alert("Excellent");
} else if (percentage >= 70) {
  alert("Grade: A");
  if ("Grade: A") {
    alert("good");
  }
} else if (percentage >= 60) {
  alert("Grade: B");
  // if("Grade: B"){
  alert("need to imporove");
  // }
} else if (percentage < 60) {
  alert("Fail");
  if ("Fail") {
    alert("Fail");
  }
}
