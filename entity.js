module.exports = class Entity {
  constructor(damage, health) {
    this.damage = damage;
    this.health = health;
    this.isAlive = true;
  }
  static attack(cible){
    cible.health -= this.damage;
  }
};
