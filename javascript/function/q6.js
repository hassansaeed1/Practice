function findGrade(score) {
  if (score > 80 && score <= 100) {
    console.log("Grade A");
  }else if (score > 70 && score <= 80) {
    console.log("Grade B");
  }else if (score > 60 && score <= 70) {
    console.log("Grade C");
  }else{
    console.log("Grade F")
  }
}
findGrade=calculateScore(88,60,70)