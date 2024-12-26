// Alert, Prompt and Confirm
/*
//alert("Hello your script works");
let a = prompt("Enter a number", "69");  //another optional default value
let write = confirm("Do you want to write it to the page");
if (write){
  document.write(a)
}
else{
  document.write("\nPlease allow me to write")
}
a = Number.parseInt(a);
alert('you have entered a of type ' + (typeof a));
*/

// DOM & BOM
/*
//DOM
console.log(document.wondow);
document.body.style.background = "yellow"; //used when we want to change style base on user actions or user input

//BOM - browser object model: provides additional objects provided by the browser(host environment) for working with everything except the document. 
// goes to another url, alert, confirm, prompt, etc.

location.href = "https://codewithharry.com"; // eg of BOM.
*/

// practise questions
// Q1. wrie a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
/*
let age = prompt("Enter your age");
age = Number.parseInt(age);
const driveAge = (age) => {
  return age >= 18? true: false;
}
if (driveAge(age)){
  alert("You can drive");
}
else{
  alert("You cannot drive");
}

// Q2. In Q1 use confirm to ask the user if he wants to see the prompt again.
let runAgain = true;
while (runAgain){
let age = prompt("Enter your age");
age = Number.parseInt(age);
const driveAge = (age) => {
  return age >= 18? true: false;
}
if (driveAge(age)){
  alert("You can drive");
}
else{
  alert("You cannot drive");
}
runAgain = confirm("Do you want to run again?");
}

// Q3. In the previous question, use console.error to log the error if the age entered is negative.

let runAgain = true;
const driveAge = (age) => {
   return age >= 18? true: false;
}
while (runAgain){
let age = prompt("Enter your age");
age = Number.parseInt(age);
  
  if (age < 0){
    console.error("Please enter a valid age");
    break;
  }
if (driveAge(age)){
  alert("You can drive");
}
else{
  alert("You cannot drive");
}
runAgain = confirm("Do you want to run again?");
}

// Q4. Write a program to change the url to google.com (redirection) if user enters a number greater than 4
let num = prompt("Ehter a number greater than 4");
num = Number.parseInt(num);
if (num > 4){
  location.href = "https://google.com";
}
*/
// Q5. Change the background of the page to yellow, red or any other color based on user input through prompt.
let color = prompt("Enter a colour");

  document.body.style.background = color;
