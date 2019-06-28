const Player = require('./player');
const Inventory = require('./inventory');
const Building = require('./inventory');

module.exports = class City{
  constructor(){
    this.tabPlayers = [];
    this.port = new Port();
    this.marche = new Marche();
    this.entrepot = new Inventory(0,0,0);
    this.tabBatiments = [];
    this.defense = 0;
  }

  build(idBuilding){
    costs = this.tabBatiments[idBuilding].getCost();

    if(this.entrepot[0] < costs[0] || this.entrepot[1] < costs[1] || this.entrepot[2] < costs[2]){
      return "resources missing";
    }
    else if(this.tabBatiments[idBuilding].isBuilt()){
      return "already built"
    }
    else{
      this.tabBatiments[idBuilding].setBuilt(true);
      this.entrepot[0] -= costs[0];
      this.entrepot[1] -= costs[1];
      this.entrepot[2] -= costs[2];
      this.defense += tabBatiments[i].getPDV();
      return "Building complete !";
    }
  }

  pullBanque(idPlayer, type, quantity){
    try{
      tabPlayers[idPlayer].inventory.push(type, entrepot.pull(type, quantity));
    }
    catch{

    }
  }
};
