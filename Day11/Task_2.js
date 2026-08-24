var grade = window.prompt("please enter your degree");

if (grade >= 90 && grade <= 100) {
  console.log("Excellent");
} else if (grade >= 80 && grade < 90) {
  console.log("Good");
} else if (grade >= 70 && grade < 80) {
  console.log("Average");
} else if (grade >= 60 && grade < 70) {
  console.log("Pass");
} else if (grade < 60 && grade >= 0) {
  console.log("fail");
} else {
  console.log("invalid input");
}
