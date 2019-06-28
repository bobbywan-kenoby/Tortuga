module.exports = class Inventory {
  #wood = 0;
  #metal = 0;
  #food = 0;
  #equipment = [];

  constructor(startWood, startMetal, startFood) {
    this.#wood = startWood;
    this.#metal = startMetal;
    this.#food = startMetal;
  }

  getWood(){
    return this.#wood;
  }
  addWood(quantity){
    this.#wood += quantity;
  }

  getMetal(){
    return this.#metal;
  }
  addMetal(quantity){
    this.#metal += quantity;
  }

  getFood(){
    return this.#food;
  }
  addFood(quantity){
    this.#food += quantity;
  }
};
