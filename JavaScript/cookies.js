// we can access cookie using document.cookie
// console.log(document.cookie);
// // we can set cookie using document.cookie
// document.cookie = "name=Seeru02062022"
// document.cookie = "name2=Seeru02082001"
// console.log(document.cookie);

// // Encode URI component: way to encode special characters
// let key = prompt("Enter your key");
// let value = prompt("Enter your value");
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
// console.log(document.cookie);
// cookies option
document.cookie = "name=Kali; path=/a; expires=Tue, 29 March 2025 03:18:22 GMT";
console.log(document.cookie);