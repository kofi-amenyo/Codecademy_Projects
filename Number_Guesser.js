let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random * 10 )
};


function compareGuesses (humanGuess, computerGuess, secretNumber) {
    //Math.abs(secretNumber - humanGuess)
     if (Math.abs((secretNumber - humanGuess)) > (Math.abs((secretNumber - computerGuess)))) {
        return true;
    } else if (humanGuess === computerGuess) {
        return true;
    } else {
      return false;
    }
}

const updateScore = (score) => {
  let humanScore = 0;
  let computerScore = 0;
  if (score === 'human'){
    humanScore += humanScore
  } else if (score === 'computer') {
    computerScore += computerScore
  } else {
    console.log('Input a valid value')
  }
}

const advanceRound = () => {
  currentRoundNumber += currentRoundNumber
}
