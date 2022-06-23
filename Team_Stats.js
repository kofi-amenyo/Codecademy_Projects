const team = {
  _players : [ {
    firstName: 'Asamoah',
    lastName: 'Gyan',
    age: 30,
    },
    {
      firstName: 'Christian',
      lastName: 'Atsu',
      age: 25
    },
    {
      firstName: 'Dede',
      lastname: 'Ayew',
      age: 24
    }],
  _games : [{
    opponent: 'King Faisal',
    teamPoints: 34,
    opponentPoint: 27
  }, {
    opponent: 'Hearts of Oak',
    teamPoints: 25,
    opponentPoints: 12
  },
  {
    opponent: 'Kotoko',
    teamPoints: 19,
    opponentPoints: 34
  }
 ],

 get players () {
   return this._players;
 },
 get games () {
   return this._games;
 },

 addPlayer(firstName, lastName, age){
   let player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this.players.push(player)
 },

 addGame(opponentsName, teamPoints, opponentPoint){
   const game = {
     opponetsName: opponentsName,
     teamPoints: teamPoints,
     opponentPoint: opponentPoint,
   };
   this.games.push(game);
 }
};

team.addPlayer('Steph', 'Curry',28);
team.addPlayer('Lisa', 'Leslie',44);
team.addPlayer('Bugs', 'Bunny',76);

team.addGame('zaytuna', 43, 54);
team.addGame('chelsea', 32, 16);
team.addGame('barcelona', 36, 23)

console.log(team.players)
console.log(team.games)
