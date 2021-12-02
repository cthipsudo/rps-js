//console.log("Hello World");

// Welcome to Rock, Paper, Scissors.

// Create a function that will randomly return Rock, Paper or Scissors
let computerPlay = () => {
  return rprBank[Math.floor(Math.random() * rprBank.length)]; // returns a random choice
};

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

  const roundResult = winStatus ? 0 : tieStatus && !winStatus ? 1 : 2;
  return calcRound(roundResult, play, comp);
};

let calcRound = (round, playerChoice, computerChoice) => {
  // Decide round results
  switch (round) {
    case 0:
      playerScore++;
      return `You Win! ${playerChoice} beats ${computerChoice}.`;
      break;
    case 1:
      return `You tied! ${playerChoice} is a stalemate against ${computerChoice}.`;
      break;
    case 2:
      computerScore++;
      return `You Lose! ${computerChoice} beats ${playerChoice}.`;
      break;
    default:
      break;
  }
};

let playRound = (choice) => {
  const pChoice = choice.getAttribute("data-choice");
  const results = gameRound(pChoice, computerPlay());
  //const resultsDisplay = document.createElement('p');
  resultsBox.textContent = results;
  pScoreElement.textContent = playerScore;
  cScoreElement.textContent = computerScore;
  checkWinner();
};

let checkWinner = () => {
  //if player reaches 5, player is winner
  //if computer reaches 5, comp is winner
  if (playerScore === 5) {
    resultsBox.textContent = "Player Wins!";
  }
  if (computerScore === 5) {
    resultsBox.textContent = "Computer Wins!";
  }
};

const rprBank = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice-box button");
const resultsBox = document.querySelector(".result");
const pScoreElement = document.querySelector(".scorebox .p-score");
const cScoreElement = document.querySelector(".scorebox .c-score");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playRound(choice);
  });
});
