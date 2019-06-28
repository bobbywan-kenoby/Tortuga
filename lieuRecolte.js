const Entity = require('./entity');

module.exports = class LieuRecolte {
  #type;
  #resource;
  #hunt = [];
  #monster = null;
  constructor(type) {
    this.#type = type;
    this.#resource = 500;
  }

  getType(){
    return this.#type;
  }

  getResource(){
    return this.#resource;
  }
  recolte(quantity){
    this.#resource -= quantity;
  }

  mobSpawn() {
    this.#monster = new Entity(50, 50);
  }
};
