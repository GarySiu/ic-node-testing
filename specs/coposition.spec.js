'use strict';
var copo  = require('../lib/coposition');
// Using a shorter name for a reference to save on typing.
// It only affects this file so it's not a big deal
var nock = require('nock');

describe('coposition', function () {
  describe('#getUUID', function () {

    var result;
    // result is scoped to this describe block
    before(function(done) {
      // before runs before the next test. Note the 'done' callback
      // we're passing in. This a feature of Mocha.

      nock('https://api.coposition.com')
        .get('/v1/uuid')
        .reply(200, {"uuid":"38238d95-4b68-4ba2-9ef0-13553175b74a"});

      // nock intercepts any requests going to https://api.coposition.com
      // If the test request hits the uuid route it will send a response
      // back to the function

      // Check out the nock homepage for more info on how to use it
      // including recording real responses for later playback

      copo.config.apiKey = 'd9b266cb-7fd6-420b-91e9-921bd8a5b53d';
      copo.getUUID(function (err, response, body) {
        result = JSON.parse(body).uuid;
        // This is actually a little clunky:
        // getUUID is passing back all the information from request
        // Maybe modify the method so that only the UUID string is returned?
        done();
      });
    });

    it("requests a UUID", function () {
      expect(result).to.exist;
      expect(result).to.be.a('string');
    });

    var errorResult;
    before(function(done) {
      // different before block means this is a different instance of
      // the coposition object
      copo.getUUID(function (err) {
        errorResult = err;
        done();
      });
    });

    it("returns an error if no API key is set", function () {
      expect(errorResult).to.be.an('error');
    });
  });
});
