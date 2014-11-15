var request = require('request');
var BASE_URL = "http://hangman.coursera.org/hangman/game";

var _post = function(url, data, callback) {
  request.post({
    uri: url,
    headers: { 'User-Agent': 'Coursera\'s nodejs API library' },
    json: true,
    body: data
  }, callback || function(err, res, data) {
    if (err)
      console.log(err);
    else
      console.log(data);
  });
};

/* Create a new game associated with the given e-mail address and return the
 * state of the new game.
 *  
 * An e-mail address may be associated with multiple games.
 * 
 * Successful callbacks return an object with the new game state.  This object
 * has the following keys:
 *  
 *     game_key
 *         A unique string identifying the game.
 * 
 *     phrase
 *         The partially revealed phrase.  The phrase will be in English and
 *         may contain punctuation (which do not need to be guessed). Hidden
 *         letters are indicated by an underscore ("_") character.  For
 *         example, this may be: "_e __e___".
 * 
 *     state
 *         The current state of the game.  This can be one of {"alive", "won",
 *         "lost"}.  "alive" means that the game is in progress.  "won" means
 *         that you have won.  "lost" means that you have lost. 
 * 
 *     num_tries_left
 *         The number of incorrect guesses that you can make before you lose.
 *         For example, if this is 0, and you have not yet won, you will lose
 *         on your next incorrect guess.
 */
exports.send_new_game_request = function(email, callback) {
  _post(BASE_URL, {'email': email}, callback);
};

/*
 * Send a guess for an existing game.
 * 
 * `game_key` is the key for the game for which you want to send a guess.  This
 * corresponds to the game_key value of the game state returned by
 * send_new_game_request.
 * 
 * `guess` is the character to guess.
 * 
 * Successful callbacks return an object with the new game state.  This object
 * has the following keys:
 * 
 *     game_key
 *         A unique string identifying the game.
 * 
 *     phrase
 *         The partially revealed phrase.  The phrase will be in English and
 *         may contain punctuation (which do not need to be guessed). Hidden
 *         letters are indicated by an underscore ("_") character.  For
 *         example, this may be: "_e __e___".
 * 
 *     state
 *         The current state of the game.  This can be one of {"alive", "won",
 *         "lost"}.  "alive" means that the game is in progress.  "won" means
 *         that you have won.  "lost" means that you have lost. 
 * 
 *     num_tries_left
 *         The number of incorrect guesses that you can make before you lose.
 *         For example, if this is 0, and you have not yet won, you will lose
 *         on your next incorrect guess.
 */
exports.send_guess_request = function(game_key, guess, callback) {
  _post(BASE_URL + '/' + game_key, {'guess': guess}, callback);
};
