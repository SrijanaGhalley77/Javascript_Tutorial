// try -- catch 
/*
setTimeout(() => {
  console.log("Hacking wifi... Please wait...")
}, 1000)
try {
  setTimeout(() => { // this will not work as it is scheduled to run after the main execution stack is empty
    console.log(shake)
  }, 100)
  console.log(snake);   // this will work as it is scheduled to run after the main execution stack is empty
}
catch (error){
  console.log("Error error error!" + error)
  alert(error.name)
  alert(error.message)
  alert(error.stack)
}
setTimeout(() => {
  console.log("Fetching username and password... Please wait...")
}, 2000)

setTimeout(() => {
  console.log("Hacking Selise pswd... Please wait...")
}, 3000)

setTimeout(() => {
  console.log("Username and Password fetched... Please wait...")
}, 4000)

// Throwing custom errors

try {
let age = prompt("What is your age?");
age = Number.parseInt(age);
if (age > 120){
  throw new ReferenceError("You old MF! Enter your real age")
}
}
catch (error) {
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}
console.log("This script is still running");
*/
// Finally Clause: always execute whether error occurs or not

const f = () => {


  try {
    let a = 0;
    // console.log(program)
    console.log("Program run successfully")
    return
  }
  catch (err) {
    console.log("This is an error")
    console.log(p)
  }

  finally {  // finally always runs even if there is error or not
    console.log("I am a good boy")
    // close the file
    // exit the loop
    // write to the log file
  }

}
f();
console.log("End")