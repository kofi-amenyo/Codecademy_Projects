const getSleepHours = (day) => {

  switch(day) {

    case 'Monday':
    return 8
    break;
    case 'Tuesday':
    return 8
    break;
    case 'Wednesday':
    return 7
    break;
    case 'Thursday':
    return 8
    break;
    case 'Friday':
    return 7
    break;
    case 'Saturday':
    return 9
    break;
    case 'Sunday':
    return 8
    break;
    default:
    return 'Error! Enter day of the week'
  }
};


  /*
  if(day === 'Monday'){
    return 6;
  } else if ( day === 'Tuesday'){
    return 8;
  } else if (day === 'Wednesday'){
    return 8;
  } else if (day === 'Thursday'){
    return 8;
  } else if (day === 'Friday'){
    return 11;
  } else if (day === 'Saturday'){
    return 7;
  } else if (day === 'Sunday'){
    return 6
  } else{
    return 'Error! Enter day of the week'
  }
};*/

//console.log(getSleepHours('Monday'))

const getActualSleepHours = () =>
  getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') +
  getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

//console.log(getSleepHours('Monday'));
console.log(getActualSleepHours());

const getIdealSleepHours =()=> {
  let idealHours = 8
  return idealHours*7;
};
console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours){
  console.log('You had a perfect amount of sleep!')
} else if (actualSleepHours > idealSleepHours){
  console.log('You got ' + (actualSleepHours - idealSleepHours)  + ' more hours of sleep than needed. You are okay')
}else if(actualSleepHours < idealSleepHours){
  console.log('You need to get ' + (idealSleepHours -actualSleepHours) + ' more sleep!')
  } else{
    console.log('Something must be wrong with your code!')
  }
};
calculateSleepDebt();
