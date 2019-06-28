module.exports = class Inventory {
  constructor() {
    this.wood = 0;
    this.metal = 0;
    this.food = 0;
    this.equipment = [];
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
};
