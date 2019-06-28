const LieuRecolte = require('./lieuRecolte');
const Player = require('./player');
const City = require('./city');

module.exports = class Ile {
  listPlayer = [];
  ville = new City();
  constructor() {
    this.forest = new LieuRecolte("wood");
    this.mine = new LieuRecolte("metal");
    this.beach = new LieuRecolte("food");
  }

  addPlayer(playerName){
    this.listPlayer.push(new Player(playerName));
  }

  getNbPlayer(){
    var nbPlayerAlive = 0;
    for (const player of this.listPlayer) {
      if(player.isAlive){
        nbPlayerAlive += 1;
      }
    }
    return nbPlayerAlive;
  }

  update(){
    //TO DO
  }
};
