// IIFE: Immediately Invoked Function Expression

let a = () => {
  return new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve(456)
  }, 2000)
})
}

//(let f = async () => {  // how a normal function works

(async () => {
  let b = await a()
  console.log(b)
  let c = await a()
  console.log(c)
  let d = await a()
  console.log(d)
})();  // this is how IIFE works

//f(); to prevent the execution of the function f(), IIFE is used.
