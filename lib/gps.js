'use strict';

var gps = {}

gps.convertCoords = function (coords) {
  var converted = {};
  if (coords.lat[0] === 'S') {
    converted.lat = -coords.lat.slice(1);
  } else {
    converted.lat = Number(coords.lat);
  };

  if (coords.lng[0] === 'W') {
    converted.lng = -coords.lng.slice(1);
  } else {
    converted.lng = Number(coords.lng);
  };

  // TODO: Both these if statements are really similar!
  // Can you refactor it into a smaller method?
  return converted;
}

module.exports = gps;
