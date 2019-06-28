const Entity = require('./entity');
const Inventory = require('./inventory');

module.exports = class Player extends Entity {
  #gold = 0;
  #action = "";
  #equip = null;
  #inventory;
  #mining = 0;
  #forestry = 0;
  #fishing = 0;
  constructor() {
    super(50, 10);
    this.#inventory = new Inventory(0,0,0);
  }

  getAction(){
    return this.#action;
  }
  setAction(action){
    if (action === "mine") {
      this.#action = "mine";
    } else if (action === "chop") {
      this.#action = "chop";
    } else if (action === "fish") {
      this.#action = "fish";
    } else {
      return false;
    }
    return true;
  }

  getGold(){
    return this.#gold;
  }
  addGold(nbGold){
    this.#gold += nbGold
  }

  getInventory(){
    return this.#inventory;
  }

  recolte(place, quantity){
    place.recolte(quantity);
    if (place.getType() === "wood") {
      this.#inventory.addWood(quantity);
    } else if (place.getType() === "metal") {
      this.#inventory.addMetal(quantity);
    } else if (place.getType() === "food") {
      this.#inventory.getFood(quantity);
    } else {
      console.log("type error");
    }
  }

};
