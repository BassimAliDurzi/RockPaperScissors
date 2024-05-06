console.log(getComputerChoice());
console.log(getHumanChoice());

function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3 + 1);
  let randomChoise;
  console.log(randomNumber);

  switch (randomNumber) {
    case 1:
      randomChoise = "Rock";
      console.log(randomChoise);
      break;

    case 2:
      randomChoise = "Paper";
      console.log(randomChoise);
      break;

    case 3:
      randomChoise = "Scissors";
      console.log(randomChoise);
      break;
  }
}

function getHumanChoice() {
    let humanChoise = prompt ('Please enter your choise Rock, Paper or Scissors')
    console.log('You have choosed:' + humanChoise);
}

