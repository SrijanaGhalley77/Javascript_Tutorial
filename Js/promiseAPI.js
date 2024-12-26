let p1 = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("Value 1");
  },11000);
});
let p2 = new Promise((resolve, reject) =>{
  setTimeout(() => {
    //resolve("Value 2");
    reject(new Error("Error"));
  },2000);
});
let p3 = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve("Value 3");
  },3000);
});

/*
let pAll = Promise.all([p1,p2,p3]);  // wait for all the promises to resolve and return the array of their results
pAll.then ((value) => {
  console.log(value); // gives the final value after all the promises are resolved
}) 

let pAll = Promise.allSettled([p1,p2,p3]);  // waits for all the promises to settle and returns their results as an array of objects with status and value
pAll.then ((value) => {
  console.log(value); // gives the value and status of the result even if the promise is rejected
})

let pAll = Promise.race([p1,p2,p3]);  // waits for the first promise to settle and its result/error becomes the outcome
pAll.then ((value) => {
  console.log(value);
})

let pAll = Promise.any([p1,p2,p3]);  // waits for the first promise fulfilled (not rejected) and its result becomes the outcome
pAll.then ((value) => {
  console.log(value);
})
*/
//let pAll = Promise.resolve(6);  // makes a resolved promise with the given value
let pAll = Promise.reject(new Error("Hey"))   // makes a rejected promise with the given error
pAll.then ((value) => {
  console.log(value);
})