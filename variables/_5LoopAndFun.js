//For loop

/*
for (let i = 0; i < 4; i++){
  console.log(i);
}
// example; Finding sum of first n natural numbers
//let n = prompt("Enter any number");
// n = Number.parseInt(n);
let n = 4;
let sum = 0;

for (i = 0; i <= n; i++) {
    sum += (i+1);
}
console.log("Sum of first " + n + " number is " + sum);

//For in loop: loops through keys in objects
let mark = {
  Chencho: "90",
  Dawa: "75",
  Eza: "80",
  Gawa: "85",
  Karma: "60"
}
for (let a in mark){
  console.log("Mark gained by " + a + " is " + mark[a]);
}

//For of loop: loops through values in objects

for (let b of "Chencho"){
  console.log(b);
}

  //for of for array
let arr = [1, 2, 3, 4, 5];
for (let c of arr) {
  console.log(c);
}
  //for of for array with index and value
  for (let [index, c] of arr.entries()) {
    console.log(`Element at index ${index} is ${c}`);
  }
  //This loop iterates over the array arr using the entries() method, which returns an iterator of key-value pairs for each element in the array.
  //In each iteration, the loop assigns the index and value of the current element to the variables index and c, respectively.
  //The code then uses a template literal to format and log a string that displays the index and value of the current element.

*/
// WHILE Loop
/*
let i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

// Do while loop
let j = 4;
do {
  console.log(j);
  j--;
}
while (j > 0);
*/

// Functions
function myfunc(x, y) {
  //this syntax is usually used in older version of js
  return (x + y) / 2;
}

let x = myfunc(4, 3); // invoking a function or calling a function

console.log(x);

// Arrow function: mostly used these days.
const sum = (a, b) => {
  return a + b;
};

console.log("Sum = " + sum(3, 5));

// funct that does not take any argument and return nothing
const hello = () => {
  console.log("Hello, how are you doing?");
};
hello();
