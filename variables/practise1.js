// 1 variable of type string and add number to it
let a = "dog";
let b = 5;
console.log(a + b);
// 2 use typeof operator to find the datatype
console.log(typeof a);
// 3 create a const object in javascript can you change it to hold a number later- can't make changes later
const c = {
  name: "Kali",
  age: 14,
  color: "black"
}
//c = 23; not allowed
console.log(c["name"]);
// 4 try to add a new key to the const object in problem 3 were you able to do it 
c["height"] = "5.0";
c["name"] = "Chakhuri";
console.log(c);
// 5 write a js program to create a word meaning dictionary of 5 words
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work.",
  sigma: "a person who likes to work independently instead of being in a crowd.",
  alpha: "A person with strong personality "
}
console.log(dict["sigma"]);