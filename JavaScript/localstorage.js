//Local Storage:
let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");
localStorage.setItem(key, value);
console.log(`The value at the key ${key} is  ${localStorage.getItem(key)}`); // ${} is used in template literals whereever there is a variable

if (key == "red" || key == "blue"){
  localStorage.removeItem(key);
}

if (key == 0){
  localStorage.clear();
}

console.log(`The value at the key 1 is:  ${localStorage.key(1)}`);
console.log(`The value at the key 2 is:  ${localStorage.key(2)}`);
