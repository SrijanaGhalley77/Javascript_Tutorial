// Promises

let p1 = new Promise((resolve, reject) =>{
  console.log("Promise is pending")
  setTimeout(() => {
    console.log("I am a promise and I am fulfilled")
    resolve(true)
  }, 5000)
})


let p2 = new Promise((resolve, reject) =>{
  console.log("Promise is pending")
  setTimeout(() => {
    console.log("I am a promise and I am rejected")
    reject(new Error("I am an error"))
  }, 5000)
})

p1.then((value)=>{
  console.log(value);
})
// p2.catch((error)=>{
//   console.log("Error occured in p2");
// })

// using then instead of catch to handle error
p2.then((value)=>{
           console.log(value);
         },(error) =>{
  console.log("Some error occured in p2")
})
