class Media {

  constructor (title){
    this._title = title;
    this._isCheckedout = false;
    this._ratings = []
  }

  get title (){
    return this._title
  }

  get isCheckedout(){
    return this._isCheckedout
  }

  get ratings(){
    return this._ratings
  }

  set isCheckedout (value){
    return this._isCheckedout = value;
  }

  toggleCheckOutStatus () {
    this._isCheckedout = !this._isCheckedout;
  }
  getAverageRating (){
    let sumRating = this.ratings.reduce((accumulator, rating) => accumulator + rating, 0);
    return (sumRating/this.ratings.length);
  }

  addRating (num){
    if(num>= 1 && num <= 5){
    this._ratings.push(num)
  } else {
    console.log ('Rating must be as low as 1 and not more than 5')
  }
}

}
class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(director, title, runtime){
    super(title);
    this._director = director;
    this._runtime = runtime;
  }

  get director (){
    return this._director
  }

  get runtime (){
    return this._runtime
  }
}

class CD extends Media{
  constructor(artiste, title, song, songTitle){
  super(title);
  this._artiste = artiste;
  this._song = song;
  //this._songTitle = songTitle
  }

  shuffle (){
    for (let i = this._song.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this._song[i], this._song[j]] = [this._song[j], this._song[i]];
      }
    return this._song;
  }
}

const historyOfEverything = new Book ('Billy Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedout);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedout);

speed.addRating(1);
speed.addRating(5);
speed.addRating(5);
console.log(speed.getAverageRating());

const songsAboutJane = new CD('Songs About Jane', 'Maroon 5', ['Harder to Breathe', 'This Love', 'Must Get Out', 'Sunday Morning', 'The Sun']);

  console.log(songsAboutJane.isCheckedOut);

  songsAboutJane.addRating(3);
  songsAboutJane.addRating(5);
  songsAboutJane.addRating(4);
  console.log(songsAboutJane.getAverageRating());

  console.log(songsAboutJane.shuffle());
