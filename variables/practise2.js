// Q1. Use logical operators to find whether the age of a person lies between 10 and 20?
/*
let age = prompt("Enter your age");
age = Number.parseInt(age);
if (age >= 10 && age <= 20) {
    console.log("Your age is within limit");
}
else {
    console.log("Your age is not valid");
}
*/
//Q2. Demonstrate the use of switch case statements in javascript.

let a = 1;
switch (a) {
  case 0:
    console.log("a is 0");
    break;
  case 1:
    console.log("a is 1");
    break;
  case 2:
    console.log("a is 2");
    break;
  default:
    console.log("a is not 0, 1 or 2");
}

//Q3. Write a javascript program to find whether a number is divisible by 2 and 3.

let n = prompt("Enter a number");
n = Number.parseInt(n);
if (n % 2 == 0 && n % 3 == 0){
  console.log("Your number is divisible by 2 and 3");
}
else {
  console.log("Your number is not divisible by 2 and 3");
}

//Q4. Write a javascript program to find whether a number is divisible by either 2 or 3.

if (n % 2 ==1 || n % 3 == 0){
  console.log("Your number is divisible by 2 and 3");
}
else {
  console.log("Your number is not divisible by 2 and 3");
}

//Q5. Print "You can drive" or "You cannot drive" based on age being greater than 18 using ternary operator

let age = prompt("Enter your age");
age = Number.parseInt(age);

let result = (age > 18) ? "You can drive" : "You can not drive"; 
console.log(result);
