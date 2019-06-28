module.exports = class Entity {
  damage;
  health;
  name;
  constructor(name, health, damage) {
    this.damage = damage;
    this.health = health;
  }

  isAlive(){
    if(this.health <= 0){
      return false;
    }
    return true;
  }

  static fight(fighter1, fighter2){
    while (true) {
      fighter1.health -= fighter2.damage;
      if (fighter1.health <= 0) {
        fighter1.isAlive = false;
        break;
      }
      fighter2.health -= fighter1.damage;
      if (fighter2.health <= 0) {
        fighter2.isAlive = false;
        break;
      }
    }
  }
};
