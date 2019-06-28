const Player = require('./player.js');
const Boat = require('./boat');

module.exports = class Player{
  constructor(nbPlace, id){
    this.place = nbPlace;
    this.id = id;
    this.heureRetour = null;
    this.tabPlayersOnBoard = [];
  }

  setHeureRetour(h){
    this.heureRetour = h;
  }
}
