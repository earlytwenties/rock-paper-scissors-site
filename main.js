import {getComputerChoice, determineWinner} from './helper.js'

const communication = document.getElementById('communication')
const humanImage = 'https://media.giphy.com/media/5Zesu5VPNGJlm/source.gif';
const computerImage = 'https://media.giphy.com/media/jUZmz3kAiAuLC/source.gif';
const tieImage = 'https://media.giphy.com/media/tW2rXVJQnYKPu/source.gif';
const image = document.createElement('img');

function getImageResult(result) {
  switch(result) {
      case 'Human won' : 
      return humanImage;
      case 'Computer won' : 
      return computerImage;
      case 'It\'s a tie': 
      return tieImage;
  }
}
        


function click(userChoice) {
   // console.log('clicked', button)
   let computerChoice = getComputerChoice();
   let result = determineWinner(userChoice, computerChoice);
   console.log(result);
   communication.innerHTML=result + ': ' + 'computer chose ' + computerChoice;
image.setAttribute('src',getImageResult(result));
document.body.appendChild(image);
}


function clickRock() {
    click('rock');
}
function clickPaper() {
    click('paper');
}
const clickScissors = () => {
click('scissors');
}

const rock = document.getElementById('Rock');
rock.addEventListener('click', clickRock);

const paper = document.getElementById('Paper');
paper.addEventListener('click', clickPaper);

const scissors = document.getElementById('Scissors');
scissors.addEventListener('click', clickScissors);