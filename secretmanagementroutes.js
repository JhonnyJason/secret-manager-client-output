// Generated by CoffeeScript 2.7.0
//###########################################################
import * as h from "./secretmanagementhandlers";

//###########################################################
export var addNodeId = async function(req, res) {
  var err, response;
  try {
    response = (await h.addNodeId(req.body.authCode, req.body.publicKey, req.body.closureDate, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var removeNodeId = async function(req, res) {
  var err, response;
  try {
    response = (await h.removeNodeId(req.body.publicKey, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var getSecretSpace = async function(req, res) {
  var err, response;
  try {
    response = (await h.getSecretSpace(req.body.publicKey, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var getSecret = async function(req, res) {
  var err, response;
  try {
    response = (await h.getSecret(req.body.publicKey, req.body.secretId, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var setSecret = async function(req, res) {
  var err, response;
  try {
    response = (await h.setSecret(req.body.publicKey, req.body.secretId, req.body.secret, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var deleteSecret = async function(req, res) {
  var err, response;
  try {
    response = (await h.deleteSecret(req.body.publicKey, req.body.secretId, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var startAcceptingSecretsFrom = async function(req, res) {
  var err, response;
  try {
    response = (await h.startAcceptingSecretsFrom(req.body.publicKey, req.body.fromId, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var stopAcceptingSecretsFrom = async function(req, res) {
  var err, response;
  try {
    response = (await h.stopAcceptingSecretsFrom(req.body.publicKey, req.body.fromId, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var shareSecretTo = async function(req, res) {
  var err, response;
  try {
    response = (await h.shareSecretTo(req.body.publicKey, req.body.shareToId, req.body.secretId, req.body.secret, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var deleteSharedSecret = async function(req, res) {
  var err, response;
  try {
    response = (await h.deleteSharedSecret(req.body.publicKey, req.body.sharedToId, req.body.secretId, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var addNotificationHook = async function(req, res) {
  var err, response;
  try {
    response = (await h.addNotificationHook(req.body.publicKey, req.body.type, req.body.specific, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var getAuthCode = async function(req, res) {
  var err, response;
  try {
    response = (await h.getAuthCode(req.body.publicKey, req.body.timestamp, req.body.signature));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var addFriendServer = async function(req, res) {
  var err, response;
  try {
    response = (await h.addFriendServer(req.body.authCode, req.body.serverURL, req.body.serverNodeId));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};

//###########################################################
export var getNodeId = async function(req, res) {
  var err, response;
  try {
    response = (await h.getNodeId(req.body.authCode));
    res.send(response);
  } catch (error) {
    err = error;
    res.send({
      error: err.stack
    });
  }
};
