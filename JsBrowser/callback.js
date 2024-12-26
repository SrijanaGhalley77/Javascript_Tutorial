// Callback function & Handeling error
function loadScript(src, callback) { // hello function is passed as an argument to loadScript function and called callback in this function
  let script = document.createElement("script");
  script.src = src; 

  script.onload = function() {
    console.log("Loaded script with SRC: " + src);
    callback(null, src); // we are callliing the function here and passing the src as an argument for the function. It ids called "CallBack Argument". null is passed to handle error.
  }
  script.onerror = function() {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error")) //error msg is passed to handle error.
  }
  document.body.appendChild(script);
}
function hello(error, src) { // src is the argument passed to the function from loadscript function. error is passed as first argument to handle error.
  if (error) {
    console.log(error)
    return
  }
  alert("Hello World!" + src);
}
function goodmorning(error, src) { // src is the argument passed to the function from loadscript function. error is passed as first argument to handle error.
  if (error) {
    console.log(error)
    return
  }
  alert("Good Morning!" + src);
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", goodmorning); // 'hello' is the function paassed as an argument to loadScript function