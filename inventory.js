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

  getWood(){
    return this.wood;
  }

  getMetal(){
    return this.metal;
  }

  getFood(){
    return food;
  }

  pull(type, quantity){
    switch (type) {
      case "wood":
        if(wood < quantity){
          throw new Error ("Il n'y a pas assez de bois.");
        }
        else{
          wood -= quantity;
          return quantity;
        }
        break;
        case "metal":
          if(metal < quantity){
            throw new Error ("Il n'y a pas assez de metal.");
          }
          else{
            metal -= quantity;
            return quantity;
          }
          break;
          case "food":
            if(wood < quantity){
              throw new Error ("Il n'y a pas assez de nourriture.");
            }
            else{
              food -= quantity;
              return quantity;
            }
            break;

    }
  }

  push(type, quantity){
    switch (type) {
      case "wood":
        this.wood += quantity;
        break;
      case "metal":
        this.metal += quantity;
        break;
      case "food":
        this.food += quantity;
        break;

    }
  }
};
