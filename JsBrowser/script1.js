// Generate a random number between 0 and 2
let randomNumber = Math.floor(Math.random() * 3);

// Use the random number to determine the letter
let choice;
if (randomNumber === 0) {
  choice = 'R';
} else if (randomNumber === 1) {
  choice = 'P';
} else {
  choice = 'S';
}
console.log(choice);
// Prompt the user for their choice
let again = true;
while (again){
let user = prompt("Enter R, P, or S");
if (user === choice){
  alert("It's a tie!");
}
else if (user === 'R' && choice === 'S'){
  alert("You win!");
}
else if (user === 'P' && choice === 'R'){
  alert("You win!");
}
else if (user === 'S' && choice === 'P'){
  alert("You win!");
}
else {
  alert("You lose!");
}
again = confirm("Do you want to play again?");
}