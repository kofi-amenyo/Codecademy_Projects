const myAge = 2;
//this value is value remains a constant
var earlyYears = 2;
//this value is subjected to change;
earlyYears *= 10.5;
let laterYears;
laterYears = myAge - 2;
// since the variable laterYears is subjected to chage, we use the let function and equate it to the myAge-2
laterYears*=4;
//console.log(earlyYears);
//console.log(laterYears);
myAgeInDogYears = earlyYears+laterYears;
myName = 'Mawuli'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
//This console.log() interpolates the conversation of ou years to dog years 
