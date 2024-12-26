//DESTRUCTURING AND SPREAD OPERATOR

// Destructuring assignment is used to unpack values from an array, or properties from objects, into distinct variables.

let arr = [2,5,8,0,5,7,32, 5,7,2,32,14,65]

// Conventional Method: No need to do this
// let a = arr[0]
// let b = arr[1]

//let [a,b, c, d, ...rest] = arr  // rest is used to store the remaining values in an array

//let [a, , , ...rest] = arr   // a = 2, 5,8 will not be assigned to any variable, and the rest of the values will be stored in an array called rest which will start from index 3 = [0]
//let [a, , b, ...rest] = arr   // a = 2, 5 is unassigned, b = 8, rest = [0,5,7,32,5,7,2,32,14,65]

//let {a, b} = {a: 1, b: 5}

// spread syntax
let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1, v2, v3){
  return v1 + v2 + v3
}

console.log(sum(...arr1));

// mostl used in React

let obj2 ={
  name: "Harry",
  company: "Company xyz",
  address: "XYZ"
}
console.log({name: "John", company: "ABC", ...obj2}) // it will not overwrite the values of obj2 as we are gettign the values of obj2 at last only.
console.log({...obj2, name: "John", company: "ABC"}) // it gets the value from obj2 and overwrites the value of name and company