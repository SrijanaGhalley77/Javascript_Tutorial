// first.innerHTML
// 'Hello this is span'
// /#:1 Error handling response: TypeError: Cannot read properties of undefined (reading 'status')
//     at chrome-extension://ijejnggjjphlenbhmjhhgcdpehhacaal/js/video-recorder-content.js:27:29196Understand this errorAI
// /#:1 Unchecked runtime.lastError: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was receivedUnderstand this errorAI
// /#:1 Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was receivedUnderstand this errorAI
// first.innerHTML="<i>this is itallic</i>"
// '<i>this is itallic</i>'
// first.outerHTML
// '<span id="first"><i>this is itallic</i></span>'
// first.outerHTML="<div>Hey div</div>"
// '<div>Hey div</div>'
// first.outerHTML="<div>Hey div</div>"
/*
// change the card title to red
let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"
console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a")) 

let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1))*/

//Insertion method- convventinal method
//   let a = document.getElementsByTagName('div')[0]
// //   a.innerHTML = a.innerHTML + "<h1>Hello World</h1>"

// //Insert element using append, prepend, before, after and replaceWith
// let div = document.createElement('div')
// div.innerHTML = '<h1>Hello World</h1>'
// //a.appendChild(div)
// //a.prepend(div)
// //a.before(div)
// a.replaceWith(div)

//Insertion method- using insertAdjacentHTML
// let id1 = document.getElementById("first")
// first.insertAdjacentHTML('beforebegin', '<div class="test">beforebegin</div>')
// first.insertAdjacentHTML('beforeend', '<div class="test">beforeend</div>')
// first.insertAdjacentHTML('afterbegin', '<div class="test">afterbegin</div>')
// first.insertAdjacentHTML('afterend', '<div class="test">afterend</div>')
// id1.remove()

// ClassName and ClassList
/*
let timeId = setTimeout(function() {
  first.className = "text-black red" 
},2000*/
//clearTimeout(timeId)
//console.log(timeId)

// //Browser Event
// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//   let b = document.getElementsByClassName("container")[0]
//   b.innerHTML = "Hello World!"
// }

// //Handling Browser Event

let x =function(e) {  //e is event object created by browser
  console.log(e.type,e.clientX,e.clientY)
    alert("Hello World1!")
  }
btn.addEventListener('click', x)
