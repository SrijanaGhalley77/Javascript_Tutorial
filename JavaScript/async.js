async function harry(){
let plingWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("27 Degrees Celcius")
  }, 1000)
})
let chukhaWeaather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("21 Degrees Celcius")
  }, 4000)
})
// plingWeather.then(alert);
//   chukhaWeaather.then(alert);
  console.log("Fetching Pling Weather Please wait ...")
  let plingW = await plingWeather; // resolves this promise and waits for it to complete and then proceed.
  console.log("Fetched Pling Weather: " + plingW)

  console.log("Fetching Chukha Weather Please wait ...")
  let chukhaW = await chukhaWeaather;
  console.log("Fetched Chukha Weather: " + chukhaW);
  return [plingW, chukhaW]; // wait for both promises to resolve and return their values
  
  
}

console.log("Welcome to Control Room");
let a = harry()
a.then((value)=> {
  console.log(value);
})