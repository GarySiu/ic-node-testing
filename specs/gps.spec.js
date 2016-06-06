var gps = require('../lib/gps');

describe('gps', function () {
  describe('#getCoords', function () {

    it('returns a gps coordinate object', function () {
      // This function isn't written yet. Can you make the test pass?
      expect(gps.getCoords()).to.be.an('object');
      // How should this object be tested?
    });

    it('returns an error when it times out')
    // If you don't add the callback, your test will be marked as pending
    // Useful for planning

    // By convention in node, errors are returned as the first argument
    // in a callback.
  });

  describe('#convertCoords', function () {
    it('converts southern lats to negative lat', function () {
      var coords = {"lat": "S33.852098", "lng": "151.210842" };
      var converted = gps.convertCoords(coords);
      expect(converted.lat).to.equal(-33.852098);
      expect(converted.lng).to.equal(151.210842);
    });

    it('converts western lngs to negative lng', function () {
      var coords = {"lat": "51499.195", "lng": "W0.176000000000002" }
      var converted = gps.convertCoords(coords);
      expect(converted.lat).to.equal(51499.195);
      expect(converted.lng).to.equal(-0.176000000000002);
      // You should test other combinations too
      // Try to break your code. Then fix it.
    });
  });
});
