// ====================================================
// Variables & Data Types
// ====================================================
console.log(
  `Variables & Data Types \n====================================================\n`,
);

var studentName = "Mohamed";
var age = 22;
var isGraduated = false;

console.log(studentName);
console.log(age);
console.log(isGraduated);

console.log(
  `Arithmetic Operators \n====================================================\n`,
);

var num1 = 20;
var num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulo:", num1 % num2);

console.log(
  `If Condition \n====================================================\n`,
);
var degree = 85;

if (degree >= 90) {
  console.log("Excellent");
} else if (degree >= 75) {
  console.log("Very Good");
} else if (degree >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

var username = "admin";
var password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login Success");
  } else {
    console.log("Wrong Password");
  }
}

console.log(`Switch \n====================================================\n`);

var day = 3;

switch (day) {
  case 1:
    console.log("Saturday");
    break;

  case 2:
    console.log("Sunday");
    break;

  case 3:
    console.log("Monday");
    break;

  default:
    console.log("Unknown Day");
}

console.log(`Ternary \n====================================================\n`);

let temperature = 35;

let weather = temperature > 30 ? "Hot Weather" : "Cold Weather";

console.log(weather);

console.log(`looping \n====================================================\n`);

for (let i = 1; i <= 5; i++) {
  console.log("For Loop:", i);
}

let count = 1;

while (count <= 5) {
  console.log("While Loop:", count);
  count++;
}

let number = 1;

do {
  console.log("Do While Loop:", number);
  number++;
} while (number <= 5);

console.log(
  `Function \n====================================================\n`,
);
// decleration
function calculateArea(length, width) {
  return length * width;
}

console.log("Area =", calculateArea(10, 5));

// Arrow Function

const square = (num) => num * num;

console.log(square(6));

console.log(`arrays \n====================================================\n`);

let skills = ["HTML", "CSS", "JavaScript", "React"];

console.log(skills);

skills.forEach(function (skill, index) {
  console.log(index, skill);
});

console.log(`object \n====================================================\n`);

let student = {
  name: "Mohamed",
  age: 20,
  faculty: "Computer Science",

  introduce: function () {
    console.log(`My name is ${this.name} and I'm ${this.age}`);
  },
};

console.log(student.name);
console.log(student.faculty);

student.introduce();

console.log(`// Loop Through Object
 \n====================================================\n`);

for (let key in student) {
  console.log(key, student[key]);
}
