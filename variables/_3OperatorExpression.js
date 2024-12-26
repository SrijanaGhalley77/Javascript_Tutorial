//Operators in JS
//1. Arithmetic Operators 2. Assignment Operators 3. Comparison Operators 4. Logical Operators 5. Bitwise Operators 6. Ternary operators
//1. Arithmetic Operators
let a = 3;
let b = 4;
console.log("a + b = ", a + b);
console.log("a - b = " + a - b);
console.log("a * b = " + a * b);
console.log("a / b = " + a / b);
console.log("a ** b = " + a ** b);
console.log("a % b = " + a % b);
console.log("a++ = " + a++);
console.log("a = " + a);
console.log("++a = " + ++a);
console.log("a = " + a);
console.log("a-- = " + a--);
console.log("a = " + a);
console.log("--a = " + --a);
console.log("a = " + a);
//2. Assignment Operators
let assignment = 1;
assignment += 5;
console.log(assignment);
assignment -= 5;
console.log(assignment);
assignment *= 5;
console.log(assignment);
assignment /= 5;
console.log(assignment);
assignment %= 5;
console.log(assignment);
assignment **= 5;
console.log(assignment);
//3. Comparison Operators
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);
console.log("comp1 > comp2 is ", comp1 > comp2);
console.log("comp1 < comp2 is ", comp1 < comp2);
console.log("comp1 >= comp2 is ", comp1 >= comp2);
console.log("comp1 <= comp2 is ", comp1 <= comp2);
//4. Logical Operators
let x = 5;
let y = 6;
console.log(x < y && x == 5);
console.log(x > y || x == 5);
console.log(!false);
console.log(!true);
//5. Bitwise Operators: perform bit by bit operation on numbers
console.log(5 + 7);
//6. Ternary Operators: Shortcut for if else statement. evaluates a condition and executes a block of code based on the condition
//Syntax: condition ? exp1 : exp2. exp1 is executed if condition is true and exp2 is executed if condition is false.

let mark = 26;
let result = (mark > 40) ? "Pass" : "Fail";
console.log(result);