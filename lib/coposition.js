'use strict';

var request = require("request");
var coposition = {};

coposition.config = {
  apiKey: 'You need to set this'
}

coposition.getUUID = function(callback) {
  if (this.config.apiKey === 'You need to set this') {
    return callback(new Error('API Key not set'));
    // Return an error locally instead of hitting the server
  }
  var options = {
    method: 'GET',
    url: 'https://api.coposition.com/v1/uuid',
    headers: {
      'cache-control': 'no-cache',
      'x-api-key': this.config.apiKey
    }
    // options is scoped to getUUID. No need to worry about
    // using the same variable name elsewhere.
  };

  request(options, function(error, response, body) {
    callback(error, response, body);
  });
}

module.exports = coposition;
