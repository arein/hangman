#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var GameManager = require('./../manager/game_manager');

program
    .version('0.0.1')
    .option('-e, --email', 'Email Address')
    .parse(process.argv);

if (!program.email) {
    console.log("You have to provide an email address");
    process.exit(1);
}

console.log('Starting to Play the Game');
GameManager.startGame(program.email, function (err, won, game) {
    if (typeof err !== "undefined") {
        console.log("An error occurred playing the game: " + err);
    } else if (won) {
        console.log("Won the Game with " + game.triesLeft + " tries left");
    } else {
        console.log("Lost the game");
    }

}, function (game) {
    console.log("Starting to Play a Round. Current Phrase is '" + game.phrase + "' and we have " + game.triesLeft + " tries left.");
});