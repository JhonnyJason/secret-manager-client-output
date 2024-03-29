// Generated by CoffeeScript 2.7.0
//###########################################################
var SecretObjectFormat, addNotificationHookResponse, getNodeIdResponse, getNotificationHookResponse, getSecretFromResponse, getSecretResponse, getSecretSpaceResponse, getSubSpaceResponse, ok, service;

import {
  NUMBER,
  STRING,
  STRINGHEX,
  STRINGHEX32,
  STRINGHEX64,
  STRINGHEX128,
  BOOLEAN,
  ARRAY,
  assertStructureAndTypes,
  NUMBERORNULL,
  OBJECT
} from "./checkStructureAndTypes.js";

//###########################################################
service = null;

export var setService = function(serviceToSet) {
  return service = serviceToSet;
};

//###########################################################
ok = true;

//###########################################################
SecretObjectFormat = {
  referencePointHex: STRINGHEX64,
  encryptedContentHex: STRINGHEX
};

//###########################################################
//region Basic

//###########################################################
getNodeIdResponse = {
  serverNodeId: STRINGHEX64,
  timestamp: NUMBER,
  signature: STRINGHEX128
};

//###########################################################
export var getNodeId = async function(req) {
  var err, response;
  response = (await service.getSignedNodeId(req));
  try {
    assertStructureAndTypes(response, getNodeIdResponse);
  } catch (error) {
    err = error;
    throw new Error(`Error: service.getSignedNodeId - response format: ${err.message}`);
  }
  return response;
};

//###########################################################
export var createAuthCode = async function(req) {
  await service.generateAuthCodeFor(req);
  return {ok};
};

//endregion

//###########################################################
//region Secret Spaces

//###########################################################
getSecretSpaceResponse = SecretObjectFormat;


//###########################################################
export var openSecretSpace = async function(req) {
  await service.openSecretSpace(req);
  return {ok};
};

//###########################################################
export var getSecretSpace = async function(req) {
  var err, response;
  response = (await service.getSecretSpace(req));
  try {
    assertStructureAndTypes(response, getSecretSpaceResponse);
  } catch (error) {
    err = error;
    throw new Error(`Error: service.getSecretSpace - response format: ${err.message}`);
  }
  return response;
};

//###########################################################
export var deleteSecretSpace = async function(req) {
  await service.deleteSecretSpace(req);
  return {ok};
};

//endregion

//###########################################################
//region Secrets

//###########################################################
getSecretResponse = SecretObjectFormat;

//###########################################################
export var setSecret = async function(req) {
  await service.setSecret(req);
  return {ok};
};

//###########################################################
export var getSecret = async function(req) {
  var err, response;
  response = (await service.getSecret(req));
  try {
    assertStructureAndTypes(response, getSecretResponse);
  } catch (error) {
    err = error;
    throw new Error(`Error: service.getSecret - response format: ${err.message}`);
  }
  return response;
};


//###########################################################
export var deleteSecret = async function(req) {
  await service.deleteSecret(req);
  return {ok};
};

//endregion

//###########################################################
//region Sub Spaces

//###########################################################
getSubSpaceResponse = SecretObjectFormat;

//###########################################################
export var openSubSpace = async function(req) {
  await service.createSubSpaceFor(req);
  return {ok};
};

//###########################################################
export var getSubSpace = async function(req) {
  var err, response;
  response = (await service.getSubSpace(req));
  try {
    assertStructureAndTypes(response, getSubSpaceResponse);
  } catch (error) {
    err = error;
    throw new Error(`Error: service.getSubSpace - response format: ${err.message}`);
  }
  return response;
};

//###########################################################
export var deleteSubSpace = async function(req) {
  await service.deleteSubSpaceFor(req);
  return {ok};
};

//endregion

//###########################################################
//region Shared Secrets

//###########################################################
getSecretFromResponse = SecretObjectFormat;

//###########################################################
export var shareSecretTo = async function(req) {
  await service.shareSecretTo(req);
  return {ok};
};

//###########################################################
export var getSecretFrom = async function(req) {
  var err, response;
  response = (await service.getSecretFrom(req));
  try {
    assertStructureAndTypes(response, getSecretFromResponse);
  } catch (error) {
    err = error;
    throw new Error(`Error: service.getSecretFrom - response format: ${err.message}`);
  }
  return response;
};


//###########################################################
export var deleteSharedSecret = function(req) {
  service.deleteSharedSecret(req);
  return {ok};
};

//endregion

//###########################################################
//region Notifications

//###########################################################
addNotificationHookResponse = {
  id: STRINGHEX32,
  type: STRING,
  url: STRING,
  lastNotification: OBJECT
};

//###########################################################
getNotificationHookResponse = {
  notificationHooks: ARRAY
};

//###########################################################
export var addNotificationHook = async function(req) {
  var err, response;
  response = (await service.addNotificationHook(req));
  try {
    assertStructureAndTypes(response, addNotificationHookResponse);
  } catch (error) {
    err = error;
    throw new Error(`Error: service.addNotificationHook - response format: ${err.message}`);
  }
  return response;
};

export var getNotificationHooks = async function(req) {
  var err, response;
  response = (await service.getNotificationHooks(req));
  try {
    assertStructureAndTypes(response, getNotificationHookResponse);
  } catch (error) {
    err = error;
    throw new Error(`Error: service.getNotificationHooks - response format: ${err.message}`);
  }
  return response;
};

export var deleteNotificationHook = async function(req) {
  await service.deleteNotificationHook(req);
  return {ok};
};

//endregion
