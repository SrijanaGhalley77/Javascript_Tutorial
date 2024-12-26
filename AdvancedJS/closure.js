// Closures is a combination of a function and its lexical environment.
// lexical environment means the environment of the function where the function was created; in this case it is the variable 'massage'
/*
message = "Good Global"
function hello1(){
  message = "Good Morning"
  {
    let message = "Good Afternoon"
  console.log("Hello 1: " + message)
  }
  let c = function hello2(){
    console.log("I am c " + message)
  }
  return c  // the returned value is a closure where you'll get the function and it lexical environment
  
}
c = hello1()
c()


function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Harry"
  return displayName;  // youll get the value of name as Harry because when a function is returned it also returns the lexical environment's reference (get the latest value of the variable))

}

let c = init();
c()
*/

function returnFunc(){
  const x= () => {
    let a = 1
    console.log(a)
    const y = () => {
      let a = 2
      console.log(a)
      const z = () => {
        let a = 3
        console.log(a)
      }
      z()
    }
    a = 999
    y()
  }
  return x;
}

let a = returnFunc()
a()