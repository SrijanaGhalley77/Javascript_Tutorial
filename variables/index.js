//ways to declare a variable
//1. using var but used for old browsers only
// var variables can be redeclared and updated
var d = 4;
var d = "Cat";
console.log(d);
//2. using let
// let variables can be updated but not redeclared
let a = 5;
// let a = "Dog"; let variable can not be redeclared
a = "Dog";
console.log(a); // value of a has been updated
//3. using const
const b = 6;

//Rules for choosing variable names
//1. letters, digits, underscores and $ sign allowed
//2. must begin with a $, _ or a letter
//3. javascript reserved words cannot be used as a variable
//4. case sensitive

// let vs var
console.log("Difference between var and let");
//1. var is globally scoped while let and const are block scoped
{
  let a = "cow";
  var d = "dog";
  console.log("value of a in block =" + " " +a);
  console.log("value of d in block =" + " " +d);
}
console.log("value of a outside block =" + " " +a);
console.log("value of d outside block =" + " " +d);
//2. var can be updated and re-declared within its scope
//3. let can be updated but not re-declared
//4. const can neither be updated nor be re-declared
// b = "cat"; due to above reasons
// const b = 9;
console.log(b);
//5. var and let variables are initialized with undefined whereas const variables are not initialized
var k;
const l = 0;
console.log(k);
console.log(l);
//6. const must be initialized during declaration unlike let and var

