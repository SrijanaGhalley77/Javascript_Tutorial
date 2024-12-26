// Finding if user is a teenager or not
let age = prompt("Enter your age");
age = Number.parseInt(age);
if (age > 12 && age < 20) {
  console.log("You are a teenager");
} else if (age > 20 && age < 30) {
  console.log("You are a young adult");
} else {
  console.log("You are not a teenager");
}
//Run it in the console of your web browser
