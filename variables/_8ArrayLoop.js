// using for() loop for array
let arr = [ 2, 5, 7, 12, 3, 15, 11];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// using forEach() loop for array
arr.forEach((element) => {
  console.log(element * element)
})

// Array.from() - used to create an array from any other object
let name = "Harry";
let arr1 = Array.from(name); // it makes array from name
console.log(arr1);

//*** for...of loop - used to get the values from an array ***
for (let i of arr) {
  console.log(i);
}

// for...in loop - used to get the keys from an array (basically gives the index of array)
for (let i in arr){
  console.log(i); 
}