// premative data types
// 1. number 2. string 3. boolean 4. null 5. undefined 6. symbol 7. bigint
//nn bb ss u
let a = null;
let b = 345;
let c = true;
let d = BigInt("567") + BigInt('5');
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof d);

//Objects in JS
const item = {
  "Harry": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Lovish"]);

const list = {
  name: "Car",
  price: "69",
  color: "red"
}
console.log(list["color"]);