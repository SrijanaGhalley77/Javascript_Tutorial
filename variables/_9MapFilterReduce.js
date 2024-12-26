let arr = [45, 23, 21];
// Array map method: creates a new array by performing some operation on each array element
let a = arr.map((value, index, array) => {
  console.log("Value and index of the array is: " + value, index, array);
  return value + index;
});
console.log("The new array created by map: " + a);

// Array filter method: filters an array with values that passes a test. Creates a new array
let arr2 = [23, 15, 67, 90, 56, 2, 0, 14];
let fil = arr2.filter((a) => {
  return a > 40;
});
console.log("Filtered array: " + fil);

// Array reduce method: reduces an array to a single value
let arr3 = [1, 2, 3, 5, 2, 1];
let newarr3 = arr3.reduce((h1, h2) => {
  return h1 + h2;
});
console.log("The reduced array: " + newarr3);
// GO TO PRACTISE 4
