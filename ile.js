const LieuRecolte = require('./lieuRecolte');

module.exports = class Ile {
  constructor() {
    this.forest = new LieuRecolte("wood");
    this.mine = new LieuRecolte("metal");
    this.beach = new LieuRecolte("food");
    this.ville = null;
  }
};
