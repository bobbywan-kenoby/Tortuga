const Entity = require('./entity');

module.exports = class LieuRecolte {
  constructor(type) {
    this.type = type;
    this.resource = 500;
    this.hunt = [];
    this.monster = null;
  }

  mobSpawn() {
    this.monster = new Entity(50, 50);
  }
};
