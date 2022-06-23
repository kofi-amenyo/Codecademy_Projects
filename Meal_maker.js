const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
  set appetizers(appetizersIn){

  },
  set mains(mainsIn){

  },
  set desserts(dessertsIn){

  },
  get appetizers(){
    return this.appetizers
  },
  get mains(){
    return this.mains
  },
  get desserts(){
    return this.desserts
  },

  get courses(){
    return {
      round1:this.appetizers,
      round2:this.mains,
      round3:this.desserts
    };

  },
   addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name:dishName,
      price:dishPrice
    };
    this._courses[courseName].push(dish)

  },
  getRandomDishFromCourse(courseName){
    let dishes = this._courses[courseName].length
    let dishNumber = Math.floor(Math.random()*dishes)
    return this._courses[courseName][dishNumber]
  },
  generateRandomMeal(){
  let appetizer = this.getRandomDishFromCourse('appetizers')
  let mains = this.getRandomDishFromCourse('mains')
  let desserts = this.getRandomDishFromCourse('desserts')
  let totalPrice = appetizer.price + mains.price + desserts.price
  return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. And the price is GHC ${totalPrice}`
  },

};

menu.addDishToCourse('mains', 'rice', 10);
menu.addDishToCourse('mains', 'fried yam', 5);
menu.addDishToCourse('mains', 'fufu', 20);

menu.addDishToCourse('appetizers', 'chips', 2);
menu.addDishToCourse('appetizers', 'fruit juice', 3);
menu.addDishToCourse('appetizers', 'meat pie', 3);

menu.addDishToCourse('desserts', 'ice cream', 3);
menu.addDishToCourse('desserts', 'beer', 5);
menu.addDishToCourse('desserts', 'gari', 3);

let meal = menu.generateRandomMeal()
console.log(meal)
