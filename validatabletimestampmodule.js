// Generated by CoffeeScript 2.7.0
//###########################################################
var tfMS;

tfMS = 10000;

//###########################################################
export var initialize = function() {
  var c;
  c = allModules.configmodule;
  if (c.validationTimeFrameMS) {
    tfMS = c.validationTimeFrameMS;
  }
};

//###########################################################
export var setTimeFrameMS = function(ms) {
  return tfMS = ms;
};

//###########################################################
export var assertValidity = function(timestamp) {
  var now, now_rounded;
  now = Date.now();
  now_rounded = now - (now % tfMS);
  if (timestamp !== now_rounded) {
    now_rounded -= tfMS;
  } else {
    return;
  }
  if (timestamp !== now_rounded) {
    now_rounded += 2 * tfMS;
  } else {
    return;
  }
  if (timestamp !== now_rounded) {
    throw new Error("Invalid Timestamp!");
  } else {
    return;
  }
};

//###########################################################
export var create = function() {
  var now, now_rounded;
  now = Date.now();
  now_rounded = now - (now % tfMS);
  return now_rounded;
};
