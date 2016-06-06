'use strict';

var copo = require('./lib/coposition');

copo.getUUID(function (err, response, body) {
  if (err) {
    console.log(err);
    // As an experiment, try commenting out the above console log
    // and running the app
  } else {
    console.log(body);
  }
});
