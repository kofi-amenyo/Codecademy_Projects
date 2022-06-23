const kelvin = 273;
//temp in kelving stays constant to 273.
const celcius = kelvin -273;
//Celcius is 273 degress less than Kelvin
let fahrenheit = celcius * (9/5)+32;
//Celcius multiplied by (9/5)+32 eqauls temp in fahrenheit.
var newton = celcius*(33/100);
newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit);
//Fahrenheit gives a decimal hence we use the floor method to round it up
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} Newton degrees`);
