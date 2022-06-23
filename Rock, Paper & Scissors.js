const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' ||userInput === 'scissors'){
    return userInput;
  } else {
    console.log('Error!')
  }
};
//console.log(getUserChoice('paper'))

const getComputerChoice = () =>{
  let computerInput = Math.floor(Math.random()*3)
  if(computerInput === 0 ){
    return 'rock'
  }
  else if (computerInput === 1){
    return 'paper'
  }
  else if (computerInput === 2){
    return 'scissors'
  }
};
//console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'The game was tie!'
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'You Lose'
    } else {
      return 'You win!'
    }
    };
  if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'You lose'
    } else {
      return 'You win!'
    }
  }
  if (userChoice === 'scissors'){
    if(computerChoice === ' rock'){
      return 'You lose'
    } else {
      return 'You win'
    }
  } else{
    return 'Error! Make a choice'
  };
}

//console.log(determineWinner('', 'scissors'))

const playGame = () => {
  const userChoice = getUserChoice('rock')
  const computerChoice = getComputerChoice()
  console.log('You chose ' + userChoice)
  console.log('Computer chose ' +computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
};

playGame()
