var api = require('./transport/api');

if (require.main === module) {

  // Show an example usage of the API.  This creates a new game and makes
  // three guesses, showing the game state response after each call.

  api.send_new_game_request('test@test.com', function(err, res, data) {

    console.log(data);

    api.send_guess_request(data.game_key, 'a', function(err, res, data) {

      console.log(data);

      api.send_guess_request(data.game_key, 'b', function(err, res, data) {

        console.log(data);

        api.send_guess_request(data.game_key, 'c', function(err, res, data) {
          console.log(data);
        });

      });

    });

  });

}
