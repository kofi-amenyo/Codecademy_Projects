let input = 'a whale of a deal';
//let input = 'turnpentine and turtles';
//let input = 'Give it your best';
const vowels = ['a', 'e', 'o', 'i', 'u', ];
const resultArray = [];
for(let i = 0; i< input.length; i++){
  //console.log('i is ___ ' + i)
  for (let j = 0; j < vowels.length; j++){
    //console.log ('j is ' + [j])
    if(input[i]===vowels[j]){
      if(input[i] === 'e' || input[i] === 'u'){ resultArray.push(input[i])
  }
if(input[i] === 'e' || input[i] === 'u'){ resultArray.push(input[i])
  } else{resultArray.push(input[i])}
  }
  }
}

console.log(resultArray.join('').toUpperCase());
