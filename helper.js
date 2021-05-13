
// const getUserChoice = (userInput) => {
// userInput = userInput.toLowerCase();
// if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors'|| userInput === 'bomb') {
// return userInput;
// } else {
// console.log('error - invalid input');
// }
// }
export const getComputerChoice = () => {
let randomNumber = Math.floor(Math.random()*3);
switch (randomNumber) {
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
}
}
export const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie';
  }
if (userChoice === 'rock') {
if (computerChoice === 'paper') {
  return 'Computer won';
} else {
  return 'Human won';
}
}
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer won';
  } else {
    return 'Human won';
  }
}
if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer won';
  } else {
    return 'Human won';
  }
}
if (userChoice === 'bomb') {
  return 'You win, you cheeky sleazebag, you';
}

  }

// function playGame() {
//   let userChoice = getUserChoice('rock','paper','scissors');
//   let computerChoice = getComputerChoice();
//   console.log(determineWinner(userChoice, computerChoice));
// }

// playGame();
