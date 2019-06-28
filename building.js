const Inventory = require('./inventory');

module.exports = class Building{
  constructor(gCost, wCost, fCost, pdv){
    this.goldCost = gCost;
    this.woodCost = wCost;
    this.foodCost = fCost;
    this.defense = pdv;

    this.built = false;
  }

  build(){
    this.built = true;
  }

  getCost(){
    return [this.goldCost, this.woodCost, this.foodCost];
  }

  isBuilt(){
    return this.built;
  }

  setBuilt(b){
    this.built = b;
  }

  getPDV(){
    return this.defense;
  }
};
