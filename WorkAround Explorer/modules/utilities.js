export const  formatNumber = number =>{
  let num = String(Math.floor(number));

  for(let i = num.length-3; i >0; i-=3){
    num = num.slice(0,1) + ',' + num.slice(i);
  }
  return num;
}
