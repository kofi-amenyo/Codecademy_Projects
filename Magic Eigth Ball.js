let userName = '';
if (userName){
   console.log(`Hello, ${userName}!`)
} else{
  console.log('Hello!')
}
var userQuestion = '';
console.log(`${userName}: ${userQuestion}`);
let randomNumber = Math.floor(Math.random()*8);
//console.log(randomNumber)
 var eightBall = '';
 switch(randomNumber){
    case (randomNumber===0):
   eightBall = 'Try again chief!'
   break;
   case (randomNumber===1):
   eightBall = 'It is certain'
   break;
   case (randomNumber ===2):
   eightBall = 'It is decidedly so'
   break;
   case (randomNumber === 3):
   eightBall = 'Reply hazy try again'
   break;
   case (randomNumber === 4):
   eightBall = 'Cannot predict now'
   break;
   case (randomNumber === 5):
   eightBall = 'Do not count on it'
   break;
   case (randomNumber === 6):
   eightBall = 'My sources say no'
   break;
   case (randomNumber === 7):
   eightBall = 'Outlook not so good'
   break;
  case (randomNumber === 8):
   eightBall = 'Signs point to yes'
   break;
 }
 console.log(`${eightBall}`)
