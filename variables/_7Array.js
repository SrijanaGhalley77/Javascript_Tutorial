// array is a collection of items
let marks_class_12 = [91, 82, 63, 84, false, "Not Present"];
console.log(marks_class_12);
// accessing values
console.log(marks_class_12[0]);
// array length
let a = [0, 1, 5, 6, 8, 9];
console.log(a.length);
// changing the value as arrays are immutable
a[0] = 10;
console.log(a);

// type of array
console.log(typeof a);
// printing array using for loop
/*for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}*/

// Array method
console.log("\nArray methods");
// toString()
let num = [1, 2, 3, 4, 5];
let b = num.toString(); // , is also counted as string
let c = b[0] + b[1];
console.log(c);

// join() - joins all the array elements using a separator
let d = num.join(" and ");
console.log(d);

// pop() - removes last element from the array
console.log("Removes the number: " + num.pop());
console.log(num);

// push() - adds a new element at the end of the array
//console.log(num.push(6));
//num = num.push(6);
num.push(6, 7);
console.log(num);

// shift() - removes first element and returns it
console.log("Orignal array: " + num);
let r = num.shift();
console.log(r, num);

// unshift() - adds element to the beginning and returns new array length
console.log("Orignal array before unshift(): " + num);
let s = num.unshift(78); //returns new array length
console.log(s, num);

// delete - array elements can be deleted using the delete operator
console.log("\nOrignal array before delete(): " + num);
let t = delete num[0];
console.log(t, num);

// concat() - used to join arrays to the given array
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let newArray = num1.concat(num2, num);
console.log(newArray);

// ** sort() - sorts the array alphabetically **
// for numbers it will sort as string and will give number starting with 1 first, then number starting with 2 and it goes on. doesn't look at the value of the numbers
let x = [551, 22, 3, 14, 5, 6, 3567, 8, 229];
console.log("\nOrignal array before sort(): " + x);
let u = x.sort(); //modifies orignal array
console.log(u);

// sort() with compare function - it is used to sort an array in ascending or descending order
let compare = (a, b) => {
  return a - b;
};
x.sort(compare);
console.log(x);

// reverse() - reverse the elements in the source array
console.log('Reversed array: ' + x.reverse());

// splice() - splice can be used to add new items to an array

// splice(position to add, no of elements to remove, elements to be added)

//refer book if not understood
let num3 = [551, 22, 3, 14, 5, 6, 3567, 8, 229];
console.log("\nOrignal array before splice(): " + num3);
let v = num3.splice(2, 3, 1021, 1022, 1023, 1024, 1025);
console.log('Deleted values: ' + v);
console.log(num3);

// slice() - slices out a piece from an array. It creates a new array
let num4 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num4.slice(2)); // prints from index 2 to end
console.log(num4.slice(3,8)); // prints from index 3 to index 8 but does not include index 8.
