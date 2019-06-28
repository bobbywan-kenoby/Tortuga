const LieuRecolte = require('./lieuRecolte');
const Player = require('./player');

module.exports = class Ile {
  #listPlayer = [];
  ville = null;
  constructor() {
    this.forest = new LieuRecolte("wood");
    this.mine = new LieuRecolte("metal");
    this.beach = new LieuRecolte("food");
  }

  addPlayer(playerName){
    this.#listPlayer.push(new Player(playerName));
  }
  getNbPlayer(){
    var nbPlayerAlive = 0;
    for (let player of this.#listPlayer) {
      if(player.isAlive()){
        nbPlayerAlive += 1;
      }
    }
    return nbPlayerAlive;
  }

  getPlayer(index){
    return this.#listPlayer[index];
  }
};
