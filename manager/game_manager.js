/**
 * Created by arein on 14/11/14.
 */

var Api = require('./../transport/api'),
    Game = require('./../model/game'),
    FrequentLettersHelper = require('./../util/frequent_letters_helper');

var GameManager = function () {
};

GameManager.startGame = function (email, completionCallback, roundCallback) {
    Api.send_new_game_request(email, function(err, res, data) {
        if (err) return completionCallback(err);
        var game = new Game(email, data.game_key);
        game.update(data);
        GameManager.playRound(game, completionCallback, roundCallback);
    });
};

GameManager.playRound = function (game, completionCallback, roundCallback) {
    roundCallback(game);
    var nextLetter = FrequentLettersHelper.getNextLetter(game.chars);

    if (typeof nextLetter === "undefined") return completionCallback(new Error("No Unused Letter Found"));

    game.chars.push(nextLetter);
    Api.send_guess_request(game.key, nextLetter, function(err, res, data) {
        if (err) return completionCallback(err);
        game.update(data);
        if (game.triesLeft == 0) return completionCallback(undefined, false, game);

        if (!game.isWon()) {
            GameManager.playRound(game, completionCallback, roundCallback);
        } else {
            completionCallback(undefined, game);
        }
    });
};

module.exports = GameManager;