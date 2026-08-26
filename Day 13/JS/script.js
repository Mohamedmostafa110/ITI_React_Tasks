var nameInput = document.querySelector("#name");
var ageInput = document.querySelector("#age");
var jobInput = document.querySelector("#job");

var submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function () {
  var name = nameInput.value;
  var age = ageInput.value;
  var job = jobInput.value;

  if (name == "" || age == "" || job == "") {
    alert("Please fill all fields");
  } else {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Job: " + job);

    if (age < 18) {
      alert("You are under age");
    } else {
      alert("Registration Completed");
    }
  }
});
