const Entity = require('./entity');
const Inventory = require('./inventory');

module.exports = class Player extends Entity {
  gold = 0;
  action = "";
  equip = null;
  inventory;
  mining = 0;
  forestry = 0;
  fishing = 0;
  constructor(name) {
    super(name, 50, 10);
    this.inventory = new Inventory(0,0,0);
    this.name = name;
  }

  toString(){
    return `${this.name} : ${this.health} ${this.isAlive()}`;
  }

  setAction(action){
    if (action === "mine") {
      this.action = "mine";
    } else if (action === "chop") {
      this.action = "chop";
    } else if (action === "fish") {
      this.action = "fish";
    } else {
      return false;
    }
    return true;
  }

  addGold(nbGold){
    this.gold += nbGold
  }

  recolte(place, quantity){
    place.recolte(quantity);
    if (place.type === "wood") {
      this.inventory.addWood(quantity);
    } else if (place.type === "metal") {
      this.inventory.addMetal(quantity);
    } else if (place.type === "food") {
      this.inventory.addFood(quantity);
    } else {
      console.log("type error");
    }
  }

};
