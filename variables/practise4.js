// Q1. create an array of numbers and take input from the user to add numbers to this array
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Q2. keep adding numbers to the array in Q1 until 0 is added to the array
let arr = [1, 2, 3, 4, 5, 6, 7, 83];
let a;
do {
  a = prompt("Enter a number");
  a = Number.parseInt(a);
  arr.push(a);
  console.log(arr);
} while(a != 0);
console.log(arr);
*/
// Q3. filter for numbers divisible by 10 from a given array
let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670];
let a = arr.filter((i) => {
  return i % 10 == 0;
})
console.log(a);

//Q4. create an array of square of given numbers
let num = [1, 2, 4, 6];
let mul = num.map((value, index, array) => {
  return value*value;
})
console.log(mul);

// Q5. use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose facorial needs to be calculated)

let x = [1, 2, 3, 4, 5, 6];
let fact = x.reduce((i,j) => {
  return i*j;
})
console.log(fact);