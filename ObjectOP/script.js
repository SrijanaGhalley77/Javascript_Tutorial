// Object oriented programming intro
let a = {
  name: "Harry",
  language: "JavaScript",
  run: () => {
    alert("Self run");
  }
}
console.log(a);

let p = {
  run: () => {
    alert("run")
  }
}
p.__proto__ = {
  name2: "Jackie"
}
// setting prototype
a.__proto__ = p;
a.run()
console.log(a.name2)