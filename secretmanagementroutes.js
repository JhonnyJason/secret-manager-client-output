// Generated by CoffeeScript 2.7.0
//###########################################################
var addNotificationHookArguments, authenticateRequest, createAuthCodeArguments, deleteNotificationHookArguments, deleteSecretArguments, deleteSecretSpaceArguments, deleteSharedSecretArguments, deleteSubSpaceArguments, getNodeIdArguments, getNotificationHooksArguments, getSecretArguments, getSecretFromArguments, getSecretSpaceArguments, getSubSpaceArguments, openSecretSpaceArguments, openSubSpaceArguments, setSecretArguments, shareSecretToArguments;

import * as h from "./secretmanagementhandlers";

import {
  performance
} from "node:perf_hooks";

import {
  //###########################################################
  NUMBER,
  STRING,
  STRINGHEX,
  STRINGHEX32,
  STRINGHEX64,
  STRINGHEX128,
  BOOLEAN,
  ARRAY,
  assertStructureAndTypes,
  NUMBERORNULL
} from "./checkStructureAndTypes.js";

//###########################################################
authenticateRequest = null;

export var setAuthenticationFunction = function(fun) {
  return authenticateRequest = fun;
};

//###########################################################
//region Basic

//###########################################################
getNodeIdArguments = {
  authCode: STRINGHEX64
};

//###########################################################
createAuthCodeArguments = {
  publicKey: STRINGHEX64,
  action: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
export var getNodeId = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, getNodeIdArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.getNodeId(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/getNodeId took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var createAuthCode = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, createAuthCodeArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.createAuthCode(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/createAuthCode took ${diffMS}ms`);
  return res.send(response);
};

//endregion

//###########################################################
//region Secret Spaces

//###########################################################
openSecretSpaceArguments = {
  authCode: STRINGHEX64,
  publicKey: STRINGHEX64,
  closureDate: NUMBERORNULL,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
getSecretSpaceArguments = {
  publicKey: STRINGHEX64,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
deleteSecretSpaceArguments = {
  publicKey: STRINGHEX64,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
export var openSecretSpace = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, openSecretSpaceArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.openSecretSpace(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/openSecretSpace took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var getSecretSpace = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, getSecretSpaceArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.getSecretSpace(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/getSecretSpace took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var deleteSecretSpace = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, deleteSecretSpaceArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.deleteSecretSpace(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/deleteSecretSpace took ${diffMS}ms`);
  return res.send(response);
};

//endregion

//###########################################################
//region Secrets

//###########################################################
setSecretArguments = {
  publicKey: STRINGHEX64,
  secretId: STRING,
  secret: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
getSecretArguments = {
  publicKey: STRINGHEX64,
  secretId: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
deleteSecretArguments = {
  publicKey: STRINGHEX64,
  secretId: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
export var setSecret = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, setSecretArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.setSecret(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/setSecret took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var getSecret = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, getSecretArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.getSecret(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/getSecret took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var deleteSecret = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, deleteSecretArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.deleteSecret(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/deleteSecret took ${diffMS}ms`);
  return res.send(response);
};

//endregion

//###########################################################
//region Sub Spaces

//###########################################################
openSubSpaceArguments = {
  publicKey: STRINGHEX64,
  fromId: STRINGHEX64,
  closureDate: NUMBERORNULL,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
getSubSpaceArguments = {
  publicKey: STRINGHEX64,
  fromId: STRINGHEX64,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
deleteSubSpaceArguments = {
  publicKey: STRINGHEX64,
  fromId: STRINGHEX64,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
export var openSubSpace = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, openSubSpaceArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.openSubSpace(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/openSubSpace took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var getSubSpace = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, getSubSpaceArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.getSubSpace(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/getSubSpace took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var deleteSubSpace = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, deleteSubSpaceArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.deleteSubSpace(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/deleteSubSpace took ${diffMS}ms`);
  return res.send(response);
};


//endregion

//###########################################################
//region Shared Secrets

//###########################################################
shareSecretToArguments = {
  publicKey: STRINGHEX64,
  shareToId: STRINGHEX64,
  secretId: STRING,
  secret: STRING,
  isOneTimeSecret: BOOLEAN,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
getSecretFromArguments = {
  publicKey: STRINGHEX64,
  fromId: STRINGHEX64,
  secretId: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
deleteSharedSecretArguments = {
  publicKey: STRINGHEX64,
  sharedToId: STRINGHEX64,
  secretId: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
export var shareSecretTo = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, shareSecretToArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.shareSecretTo(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/shareSecretTo took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var getSecretFrom = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, getSecretFromArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.getSecretFrom(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/getSecretFrom took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var deleteSharedSecret = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, deleteSharedSecretArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.deleteSharedSecret(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/deleteSharedSecret took ${diffMS}ms`);
  return res.send(response);
};

//endregion

//###########################################################
//region Notifications

//###########################################################
addNotificationHookArguments = {
  publicKey: STRINGHEX64,
  type: STRING,
  targetId: STRING,
  notifyURL: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
getNotificationHooksArguments = {
  publicKey: STRINGHEX64,
  targetId: STRING,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
deleteNotificationHookArguments = {
  publicKey: STRINGHEX64,
  notificationHookId: STRINGHEX32,
  timestamp: NUMBER,
  signature: STRINGHEX128,
  nonce: NUMBER
};

//###########################################################
export var addNotificationHook = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, addNotificationHookArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.addNotificationHook(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/addNotificationHook took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var getNotificationHooks = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, getNotificationHooksArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.getNotificationHooks(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/getNotificationHooks took ${diffMS}ms`);
  return res.send(response);
};

//###########################################################
export var deleteNotificationHook = async function(req, res) {
  var diffMS, end, err, response, start;
  start = performance.now();
  try {
    assertStructureAndTypes(req.body, deleteNotificationHookArguments);
  } catch (error) {
    err = error;
    return res.status(400).send({
      error: err.message
    });
  }
  try {
    await authenticateRequest(req);
  } catch (error) {
    err = error;
    return res.status(401).send({
      error: err.message
    });
  }
  try {
    response = (await h.deleteNotificationHook(req));
  } catch (error) {
    err = error;
    return res.send({
      error: err.message
    });
  }
  end = performance.now();
  diffMS = end - start;
  console.log(`/deleteNotificationHook took ${diffMS}ms`);
  return res.send(response);
};

//endregion
