// Rock Paper Scissors
console.log("Rock Paper Scissors");

// Random choise by computer
function getComputerChoice() {
  let choiceNumber = Math.floor(Math.random() * 3 + 1);

  let computerChoice =
    choiceNumber === 1 ? "rock" : choiceNumber === 2 ? "paper" : "scissors";
  return computerChoice;
}

// Human choice
function getHumanChoice() {
  let humanChoice = prompt("Please choose Rock, Paper or Scissors");
  if (humanChoice !== null) {
    if (
      humanChoice.toLowerCase() === "rock" ||
      humanChoice.toLowerCase() === "paper" ||
      humanChoice.toLowerCase() === "scissors"
    ) {
      return humanChoice.toLocaleLowerCase();
    } else {
      console.log("Your choice does not match the choices in this game!");
    }
  }
}

//Play Round

let computerScore = 0;
let humanScore = 0;

let computerSelection = getComputerChoice();
let humanSelection = getHumanChoice();

function PlayRound(humanSelection, computerSelection) {
  if (humanSelection) {
    let result =
      humanSelection === computerSelection
        ? "Game Tie!"
        : (humanSelection === "rock" && computerSelection === "scissors") ||
          (humanSelection === "scissors" && computerSelection === "paper") ||
          (humanSelection === "paper" && computerSelection === "rock")
        ? (humanScore = 1)
        : (computerScore = 1);

    console.log("Your choice: " + humanSelection);
    console.log("Computer Choice: " + computerSelection);

    if (humanScore === 1) {
      console.log("You wins this time and get 1 point!");
    } else if (computerScore === 1) {
      console.log("Computer wins this time and get 1 point!");
    } else {
      console.log("Game tie. No one gets a point.");
    }
  } else {
    console.log("You should enter a choice!");
  }
}
PlayRound(humanSelection, computerSelection);

