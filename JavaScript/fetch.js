// Fetch API
let p = fetch("https://goweather.herokuapp.com/weather/Ny") // fetch returns a promise
p.then((response)=>{  // response is a promise containing .status, .ok and other properties 
  console.log(response.status)
  console.log(response.ok)
  console.log(response.headers) // header whihc is sent by the server
  return response.json();   // returns a promise in the form of .text and .json
  // we can only use one of these methods at a time
}).then((response)=>{   // therefore we need to use .then() to get the value of the promise
    console.log(response);
  })

// Request Header: header which we send with the request

let res = fetch("https://goweather.herokuapp.com/weather/Ny",{
  headers: {
    Authentication: "secret"
  }
})