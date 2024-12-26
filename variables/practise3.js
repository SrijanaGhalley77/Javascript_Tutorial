//Q1. Write a program to print the marks of a student in an object using for loop.
let obj = {
  Sonam: 56,
  Karma: 78,
  Chencho: 90,
  Dawa: 45,
};
console.log("Question 1:");
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(
    "Mark of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]],
  ); // refer note on note book for more info.
}

//Q2. Write a program in Q1 using for in loop.
//using for in loop
console.log("Question 2:");
for (let a in obj) {
  console.log("Mark of " + a + " is " + obj[a]);
}

//Q3. Write a program to print "try again" until the user enters the correct number.
/*
let n = prompt("Enter the correct number");
n = Number.parseInt(n);
let correct = 5;
while (n != correct){
  console.log("Try again");
  n = prompt("Enter the correct number");
  n = Number.parseInt(n);
}
console.log("You have entered the correct number");
*/
//Q4. Write a function to find mean of 5 numbers.

console.log("Question 4:");
const mean = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
}
console.log("Mean = " + mean(1, 2, 3, 4, 5));
