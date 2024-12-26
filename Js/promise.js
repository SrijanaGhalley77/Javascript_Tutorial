// Promise Chaining

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 seconds");
    resolve(56);
  }, 2000);
});
p1.then((value) => {
  console.log(value);
  //let p2 = new Promise((resolve, reject) => {
  return new Promise((resolve, reject) => {
    // no need to create new variable and return new promise
    setTimeout(() => {
      resolve("Promise 2");
    }, 2000);
  });
  //return p2;
})
  .then((value) => {
    console.log("We are done");
    return 2;
  })
  .then((value) => {
    console.log("Now we are finally done");
  });

// Attaching multiple handlers to a promise
p1.then(() => {
  console.log("Handler 1 running independently.");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(4);
    }, 6000);
  });
}).then((value) => {
  console.log(value);
});

p1.then(() => {
  console.log("Handler 2 running independently.");
});
