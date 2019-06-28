const Entity = require('./entity');

module.exports = class LieuRecolte {
  type;
  resource;
  hunt = [];
  monster = null;
  constructor(type) {
    this.type = type;
    this.resource = 500;
  }

  recolte(quantity){
    this.resource -= quantity;
  }

  mobSpawn(hp, damage) {
    this.monster = new Entity(hp, damage);
  }

  regeneration(){
    //TO DO
  }
};
