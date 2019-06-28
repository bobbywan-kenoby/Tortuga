module.exports = class Entity {
  #damage;
  #health;
  #isAlive = false;
  constructor(health, damage) {
    this.#damage = damage;
    this.#health = health;
    if (this.#health > 0) {
      this.#isAlive = true;
    }
  }

  static fight(fighter1, fighter2){
    while (true) {
      fighter1.#health -= fighter2.#damage;
      if (fighter1.#health <= 0) {
        fighter1.#isAlive = false;
        break;
      }
      fighter2.#health -= fighter1.#damage;
      if (fighter2.#health <= 0) {
        fighter2.#isAlive = false;
        break;
      }
    }
  }

  getHealth(){
    return this.#health;
  }

  isAlive(){
    return this.#isAlive;
  }
};
