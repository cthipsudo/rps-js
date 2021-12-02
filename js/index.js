//console.log("Hello World");

// Welcome to Rock, Paper, Scissors.

// Create a function that will randomly return Rock, Paper or Scissors

let computerPlay = () => {
  return rprBank[Math.floor(Math.random() * rprBank.length)]; // returns a random choice
};

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
  let tieStatus = play === comp ? true : false;


  return winStatus ? 0 : tieStatus && !winStatus ? 1 : 2;
	//returns 0 if player wins the round
	// 1 if tied
	// 2 if lost
};

//console.log(gameRound("sCissors", computerPlay()));

// Write a function called game
// The game should loop for 5 rounds
// The user is prompted every round
// The score should be kept across each round
// Each round the results are logged to the console.
// At the end you're either a winner or loser

// create the game function
// declare you needed variables
// create round structure
// prompt user every round
// after the round console log result and track score
// compare scores and then console log the final game message.

let game = (rounds) => {
	//Base case and results calculation
  if (rounds === 0) {
    console.log(
      playerScore > computerScore
        ? `We've got a Winner!`
        : playerScore === computerScore
        ? "Tie! Play again?"
        : `Loser! Try again next time...`
    );
    return;
  }

	// Computer and Player choices
  const playerChoice = prompt(
    `Hi player, Rock, Paper or Scissors?`
  ).toLowerCase();
  const computerChoice = computerPlay();

	// Decide round results
  const round = gameRound(playerChoice, computerChoice);
  switch (round) {
    case 0:
      console.log(`You Win! ${playerChoice} beats ${computerChoice}.`);
      playerScore++;
      break;
    case 1:
      console.log(
        `You tied! ${playerChoice} is a stalemate against ${computerChoice}.`
      );
      break;
    case 2:
      console.log(`You Lose! ${computerChoice} beats ${playerChoice}.`);
      computerScore++;
      break;
    default:
      break;
  }
	//Log the score
	console.log(`Player:${playerScore} | Computer: ${computerScore}`);
	
	//Repeat the function
  game(rounds - 1);
};


const rprBank = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
game(5);
