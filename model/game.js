/**
 * Created by arein on 14/11/14.
 */

var Game = function (userEmail, gameKey) {
  this.email = userEmail;
  this.chars = [];
  this.key = gameKey;
};

Game.prototype.update = function (data) {
    this.triesLeft = data.num_tries_left;
    this.state = data.state;
    this.phrase = data.phrase;
};

Game.prototype.isWon = function () {
    return this.phrase.indexOf("_") == -1;
};

module.exports = Game;