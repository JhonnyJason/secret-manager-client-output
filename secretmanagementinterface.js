// Generated by CoffeeScript 2.7.0
import {
  postData
} from "thingy-network-base";

//###########################################################
export var getNodeId = function(sciURL, authCode) {
  var requestObject, requestURL;
  requestObject = {authCode};
  requestURL = sciURL + "/getNodeId";
  return postData(requestURL, requestObject);
};

export var createAuthCode = function(sciURL, publicKey, action, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, action, timestamp, signature, nonce};
  requestURL = sciURL + "/createAuthCode";
  return postData(requestURL, requestObject);
};

//###########################################################
export var openSecretSpace = function(sciURL, authCode, publicKey, closureDate, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {authCode, publicKey, closureDate, timestamp, signature, nonce};
  requestURL = sciURL + "/openSecretSpace";
  return postData(requestURL, requestObject);
};

export var deleteSecretSpace = function(sciURL, publicKey, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, timestamp, signature, nonce};
  requestURL = sciURL + "/deleteSecretSpace";
  return postData(requestURL, requestObject);
};

//###########################################################
export var getSecretSpace = function(sciURL, publicKey, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, timestamp, signature, nonce};
  requestURL = sciURL + "/getSecretSpace";
  return postData(requestURL, requestObject);
};

export var getSubSpace = function(sciURL, publicKey, fromId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, fromId, timestamp, signature, nonce};
  requestURL = sciURL + "/getSubSpace";
  return postData(requestURL, requestObject);
};

//###########################################################
export var getSecret = function(sciURL, publicKey, secretId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, secretId, timestamp, signature, nonce};
  requestURL = sciURL + "/getSecret";
  return postData(requestURL, requestObject);
};

export var setSecret = function(sciURL, publicKey, secretId, secret, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, secretId, secret, timestamp, signature, nonce};
  requestURL = sciURL + "/setSecret";
  return postData(requestURL, requestObject);
};

export var deleteSecret = function(sciURL, publicKey, secretId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, secretId, timestamp, signature, nonce};
  requestURL = sciURL + "/deleteSecret";
  return postData(requestURL, requestObject);
};

//###########################################################
export var openSubSpace = function(sciURL, publicKey, fromId, closureDate, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, fromId, closureDate, timestamp, signature, nonce};
  requestURL = sciURL + "/openSubSpace";
  return postData(requestURL, requestObject);
};

export var deleteSubSpace = function(sciURL, publicKey, fromId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, fromId, timestamp, signature, nonce};
  requestURL = sciURL + "/deleteSubSpace";
  return postData(requestURL, requestObject);
};

//###########################################################
export var getSecretFrom = function(sciURL, publicKey, fromId, secretId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, fromId, secretId, timestamp, signature, nonce};
  requestURL = sciURL + "/getSecretFrom";
  return postData(requestURL, requestObject);
};

export var shareSecretTo = function(sciURL, publicKey, shareToId, secretId, secret, isOneTimeSecret, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, shareToId, secretId, secret, isOneTimeSecret, timestamp, signature, nonce};
  requestURL = sciURL + "/shareSecretTo";
  return postData(requestURL, requestObject);
};

export var deleteSharedSecret = function(sciURL, publicKey, sharedToId, secretId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, sharedToId, secretId, timestamp, signature, nonce};
  requestURL = sciURL + "/deleteSharedSecret";
  return postData(requestURL, requestObject);
};

//###########################################################
export var addNotificationHook = function(sciURL, publicKey, type, targetId, notifyURL, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, type, targetId, notifyURL, timestamp, signature, nonce};
  requestURL = sciURL + "/addNotificationHook";
  return postData(requestURL, requestObject);
};

export var getNotificationHooks = function(sciURL, publicKey, targetId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, targetId, timestamp, signature, nonce};
  requestURL = sciURL + "/getNotificationHooks";
  return postData(requestURL, requestObject);
};

export var deleteNotificationHook = function(sciURL, publicKey, notificationHookId, timestamp, signature, nonce) {
  var requestObject, requestURL;
  requestObject = {publicKey, notificationHookId, timestamp, signature, nonce};
  requestURL = sciURL + "/deleteNotificationHook";
  return postData(requestURL, requestObject);
};

//#TODO requestable Server stuff
