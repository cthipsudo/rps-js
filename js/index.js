console.log("Hello World");

// Welcome to Rock, Paper, Scissors.

// Create a function that will randomly return Rock, Paper or Scissors

const rprBank = ["rock", "paper", "scissors"];

let computerPlay = () => {
  return rprBank[Math.floor(Math.random() * rprBank.length)];
};

//console.log(computerPlay());

// Write a function that plas a single round of RPS
// Takes two parameters
// returns a string declaring the winner of the round.

// Compare the inputs against each other
// How is a winner declared?
// Declare your variables
// Write some conditional statment using Rock Beats Scissors, Scissors Beats Paper, Paper Beats Rock, and anything else you lose.

// output win status and the two inputs in the return

let gameRound = (play, comp) => {
  let r = rprBank[0]; // Rock
  let p = rprBank[1]; // Paper
  let s = rprBank[2]; // Scissors

  let winStatus =
    play === r && comp === s
      ? true
      : play === s && comp === p
      ? true
      : play === p && comp === r
      ? true
      : false;

  return winStatus
    ? `You Win! ${play} beats ${comp}`
    : `You Lose! ${comp} beats ${play}`;
};

console.log(gameRound("scissors", "paper"));
