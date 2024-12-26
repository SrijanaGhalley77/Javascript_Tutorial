// Q. write a javascript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number. 100 - (no. of guesses is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1 - 100.

let random = Math.floor(Math.random() * 101);
random = Number.parseInt(random);
let num;
let score = 100;

while (random != num) {
  score -= 1;
  num = prompt("Guess the number: ");
  num = Number.parseInt(num);
  if (random == num) {
    console.log("Congratulations! You guessed the correct number");
    console.log(`You guessed the actual number in ${100 - score} chances`);
  } else if (num > random && num <= 100) {
    console.log("The number is greater than the guessed number");
  } else if (num < random && num >= 0) {
    console.log("The number is lesser than the guessed number");
  } else {
    console.log("Enter a number between 1 and 100");
  }
}
