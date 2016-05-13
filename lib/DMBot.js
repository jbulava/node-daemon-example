var Twit = require('twit');
var nconf = require('nconf');
nconf.env().file({ file: 'config.json' });

var dmBot = { };

dmBot.start = function () {

  // Create Twitter object
  var T = new Twit({
      consumer_key: nconf.get('CONSUMER_KEY'),
      consumer_secret: nconf.get('CONSUMER_SECRET'),
      access_token: nconf.get('ACCESS_KEY'),
      access_token_secret: nconf.get('ACCESS_SECRET'),
  })

  // Create user stream and event handlers
  var user_stream = T.stream('user', { replies: 'all' });

  user_stream.on('connect', function (request) {
    console.log('Connecting to Twitter User Stream...');
  });

  user_stream.on('connected', function (request) {
    console.log('Connected.');
  });

  user_stream.on('reconnect', function (request, response, connectInterval) {
    console.log('Reconnecting...');
  });

  user_stream.on('direct_message', function (directMsg) {
    console.log(directMsg);
    // TODO: Instead of printing, parse out what the user wants 
    // and then call one of the functions below that have yet to be defined
  });
}

function oneTask () {

}

function anotherTask() {

}

module.exports = dmBot;