// Scope and Hoisting
let p = 6;  // global scope
function ax(){
  let a = 8; // function scope
  console.log(a)
  console.log(p) // global scope
  {
    let a = 7; // block scope
    console.log(a)
  }
}
 
ax()
console.log(p)  // global scope
//console.log(a) // cant access as it has function scope only


// Hoisting: refers to the process whereby the interpreter appears to move the declarations to the top of the code before execution.

// Hoisting only works with var and function declarations not with let and const.

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// Following two lines will run successfully due to JavaScript hoisting
console.log(a)  // var is hoisted on top and js automatically initializes it to undefined
console.log(b)  // let and const are not hoisted as it goes to temporary dead zone 
greet()
const greet= () => {
  console.log("Good Morning")
}
let b = 6;
var a = 9;  // declaration hoisted to the top but initialization is not
console.log(a)
