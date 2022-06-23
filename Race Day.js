let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber);
const regEarly = false;
let runnerAge = 18;

if (runnerAge > 18 && regEarly){
  raceNumber+=1000
}
if (runnerAge >18 && regEarly){
  console.log(`${raceNumber} Early Adult Race race beings at 9:30 AM`)
} else if (runnerAge > 18 && !regEarly){
  console.log(`${raceNumber} Late Adults run at 11:00AM`)
}
  else if (runnerAge < 18){
    console.log(`${raceNumber} Youth race at 12:30PM`)
  }else{
      console.log('18 year olds should kindly see the registration desk')
}
