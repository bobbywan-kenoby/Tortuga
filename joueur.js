const Entity = require('./entity');
const Inventory = require('./inventory');

module.exports = class Joueur extends Entity {
  constructor() {
    super(50, 10);
    this.gold = 0;
    this.action = "";
    this.equip = null;
    this.inventory = new Inventory();
    this.mining = 0;
    this.forestry = 0;
    this.fishing = 0;
  }

  recolte(place, quantity){
    place.resource -= quantity;
    if (place.type === "wood") {
      this.inventory.wood += quantity;
    } else if (place.type === "metal") {
      this.inventory.metal += quantity;
    } else if (place.type === "food") {
      this.inventory.food += quantity;
    } else {
      console.log("type error");
    }
  }

};
