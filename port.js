const Player = require('./player');
const Boat = require('./boat');

module.exports = class Port{
  constructor(){
    this.tabBoats = [];
  }

  addBoat(){
    this.tabBoats.push(new Boat(tabBoats.length+1, tabBoats.length));
  }

  joinRaid(idCreator, difficultyLevel, heureRetour){
    if(tabBoats[difficultyLevel].heureRetour != null){
      tabBoats.boardPlayer(idCreator);
    }
    else{
      tabBoats.boardPlayer(idCreator);
      tabBoats.setHeureRetour(heureRetour);
    }
  }
}
