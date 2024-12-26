// Post request: 
const creteTodo = async (todo) => { // we want to return a promise and await different promises
  let options = {  // object
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(todo),  // converts javascript object to sting. JSON.parse converts string to javascript object
  }

let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  let response = await p.json();
  return response;

}

const getTodo =async (id) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json();
    return r;
}

const mainFunc = async () => {
  let todo = {
    title: 'Seeru',
    body: 'bhai',
    userId: 1100,
  }
  let todor = await creteTodo(todo);
  console.log(todor);
  console.log(await getTodo(5))
}

mainFunc()