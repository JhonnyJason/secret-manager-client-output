// Generated by CoffeeScript 2.5.1
(function() {
  var network;

  network = {};

  if (typeof window === "object") {
    network = require("./networkbrowser");
  } else {
    network = require("./networknode");
  }

  module.exports = network;

}).call(this);
