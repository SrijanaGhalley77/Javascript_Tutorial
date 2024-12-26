// String can be crested with single quotes and double quotes
let name = "Srijana";
let n = 'KARMA Dorji';
//let na = n.length;  // gives length of string
console.log(n)
console.log(name[0]);  // gives the charactrer in the position of the string
let a = name.length;
console.log(a);

// Template literals
let boy1 = "Dorji";
let boy2 = "Karma";
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`; // `` is called baacktick
console.log(sentence);

// String interpollation
let line = `This is ${name}`;
console.log(line);

// Escape sequence characters
// \' = single quote 
// \" = double quote
// \n = new line
// \t = tab
// \r = carriage return

let fruit = 'Ba\nnana is \ta fruit';
console.log(fruit);


// String methods
console.log("\nAfter this is string methods");
// length - does not count escape secquence characters
console.log(name.length);
// toUpperCase() - converts string to upper case
console.log(name.toUpperCase());
// toLowerCase() - converts string to lower case
console.log(n.toLocaleLowerCase());
// slice(a,b) - extracts a part of string and returns it as a new string
console.log(name.slice(1,5)); // prints from 2 to 4 but not 4 eg, Srijana- it will print 2 to 5 which is rija
console.log(name.slice(3)); // will print from 3 to end

// replace(a,b) - replaces a part of string with another string
console.log(n.replace("Dorji","Dema")); //case sensitive
// concat(a,b) - concatenates two strings
console.log(name.concat(" is a friend of ",n));
// trim() - removes white spaces from the string
let friend = "    Srijana    ";
console.log(friend);
console.log(friend.trim());
// includes(a) - checks if the string includes a part of string
console.log(name.includes("ana")); // case sensitive
// startsWith(a) - checks if the string starts with a part of string
console.log(n.startsWith("K"));
// endsWith(a) - checks if the string ends with a part of string
console.log(n.endsWith("i"));
// charAt(a) - returns the character at the specified index
console.log(name.charAt(2));

// String is immutable - cannot be changed
let fr = 'Ghalley' + 'Srijana';
/*
for (let i = 0; i < fr.length; i++) {
  console.log(fr[i]);
}*/// this is a for loop to print the string
// fr[5] = 'k'; // this is not possible as string is immutable
