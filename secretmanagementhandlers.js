// Generated by CoffeeScript 2.7.0
//###########################################################
var service;

service = null;

export var setService = function(serviceToSet) {
  return service = serviceToSet;
};

//###########################################################
export var openSecretSpace = async function(authCode, publicKey, closureDate, timestamp, signature, nonce) {
  await service.openSecretSpace(authCode, publicKey, closureDate);
  return {
    ok: true
  };
};

//###########################################################
export var getSecretSpace = async function(publicKey, timestamp, signature, nonce) {
  var eCE, eCIS, rE, rIS, secretObj;
  secretObj = (await service.getSecretSpace(publicKey));
  rE = secretObj.referencePointHex != null;
  eCE = secretObj.encryptedContentHex != null;
  rIS = typeof secretObj.referencePointHex === "string";
  eCIS = typeof secretObj.encryptedContentHex === "string";
  if (rE && eCE && rIS && eCIS) {
    return secretObj;
  }
  /*   
   {
       "referencePointHex": "...",
       "encryptedContentHex": "..."
   }
   */
  throw new Error("Service returned wrong secret object format.");
};

//###########################################################
export var deleteSecretSpace = async function(publicKey, timestamp, signature, nonce) {
  await service.deleteSecretSpace(publicKey);
  return {
    ok: true
  };
};

//###########################################################
export var setSecret = async function(publicKey, secretId, secret, timestamp, signature, nonce) {
  await service.setSecret(publicKey, secretId, secret);
  return {
    ok: true
  };
};

//###########################################################
export var getSecret = async function(publicKey, secretId, timestamp, signature, nonce) {
  var eCE, eCIS, rE, rIS, secretObj;
  secretObj = (await service.getSecret(publicKey, secretId));
  rE = secretObj.referencePointHex != null;
  eCE = secretObj.encryptedContentHex != null;
  rIS = typeof secretObj.referencePointHex === "string";
  eCIS = typeof secretObj.encryptedContentHex === "string";
  if (rE && eCE && rIS && eCIS) {
    return secretObj;
  }
  /*   
   {
       "referencePointHex": "...",
       "encryptedContentHex": "..."
   }
   */
  throw new Error("Service returned wrong secret object format.");
};


//###########################################################
export var deleteSecret = async function(publicKey, secretId, timestamp, signature, nonce) {
  await service.deleteSecret(publicKey, secretId);
  return {
    ok: true
  };
};

//###########################################################
export var openSubSpace = async function(publicKey, fromId, closureDate, timestamp, signature, nonce) {
  await service.createSubSpaceFor(publicKey, fromId, closureDate);
  return {
    ok: true
  };
};

//###########################################################
export var getSubSpace = async function(publicKey, fromId, timestamp, signature, nonce) {
  var eCE, eCIS, rE, rIS, secretObj;
  secretObj = (await service.getSubSpace(publicKey, fromId));
  rE = secretObj.referencePointHex != null;
  eCE = secretObj.encryptedContentHex != null;
  rIS = typeof secretObj.referencePointHex === "string";
  eCIS = typeof secretObj.encryptedContentHex === "string";
  if (rE && eCE && rIS && eCIS) {
    return secretObj;
  }
  /*   
   {
       "referencePointHex": "...",
       "encryptedContentHex": "..."
   }
   */
  throw new Error("Service returned wrong secret object format.");
};

//###########################################################
export var deleteSubSpace = async function(publicKey, fromId, timestamp, signature, nonce) {
  await service.removeSubSpaceFor(publicKey, fromId);
  return {
    ok: true
  };
};

//###########################################################
export var shareSecretTo = async function(publicKey, shareToId, secretId, secret, oneTimeSecret, timestamp, signature, nonce) {
  await service.shareSecretTo(publicKey, shareToId, secretId, secret, oneTimeSecret);
  return {
    ok: true
  };
};

//###########################################################
export var getSecretFrom = async function(publicKey, fromId, secretId, timestamp, signature, nonce) {
  var eCE, eCIS, rE, rIS, secretObj;
  secretObj = (await service.getSecretFrom(publicKey, fromId, secretId));
  rE = secretObj.referencePointHex != null;
  eCE = secretObj.encryptedContentHex != null;
  rIS = typeof secretObj.referencePointHex === "string";
  eCIS = typeof secretObj.encryptedContentHex === "string";
  if (rE && eCE && rIS && eCIS) {
    return secretObj;
  }
  /*   
   {
       "referencePointHex": "...",
       "encryptedContentHex": "..."
   }
   */
  throw new Error("Service returned wrong secret object format.");
};


//###########################################################
export var deleteSharedSecret = function(publicKey, sharedToId, secretId, timestamp, signature, nonce) {
  service.deleteSharedSecret(sharedToId, publicKey, secretId);
  return {
    ok: true
  };
};

//###########################################################
export var addNotificationHook = async function(publicKey, type, targetId, notifyURL, timestamp, signature, nonce) {
  var notificationHookId;
  notificationHookId = (await service.addNotificationHook(publicKey, type, targetId, notifyURL));
  if (typeof notificationHookId !== "string") {
    throw new Error("Service did not return a string for the notificationHookId.");
  }
  return {notificationHookId};
};

export var getNotificationHooks = async function(publicKey, targetId, timestamp, signature, nonce) {
  var notificationHooks;
  notificationHooks = (await service.getNotificationHooks(publicKey, targetId));
  if (!Array.isArray(notificationHooks)) {
    throw new Error("Service did not return an Array for the notificationHooks.");
  }
  return {notificationHooks};
};

export var deleteNotificationHook = async function(publicKey, notificationHookId, timestamp, signature, nonce) {
  await service.deleteNotificationHook(publicKey, notificationHookId);
  return {
    ok: true
  };
};

//###########################################################
export var createAuthCode = async function(publicKey, timestamp, signature, nonce) {
  var authCode;
  authCode = (await service.generateAuthCodeFor(publicKey));
  if (typeof authCode === "string") {
    return {authCode};
  }
  /*   
   {
       "authCode": "..."
   }
   */
  throw new Error("Service returned wrong authCode type.");
};

//###########################################################
export var setRequestableServer = async function(authCode, serverURL, serverNodeId) {
  await service.setRequestableServer(serverURL, serverNodeId);
  return {
    ok: true
  };
};

//###########################################################
export var getNodeId = async function(authCode) {
  var pKE, pKEIS, result, sE, sEIS, tSE, tSEIS;
  result = (await service.getSignedNodeId());
  pKE = result.publicKey != null;
  tSE = result.timestamp != null;
  sE = result.signature != null;
  pKEIS = typeof result.publicKey === "string";
  tSEIS = typeof result.timestamp === "string";
  sEIS = typeof result.signature === "string";
  if (pKE && tSE && sE && pKEIS && tSEIS && sEIS) {
    return result;
  }
  /*
  {
      "publicKey": "...",
      "timestamp": "...",
      "signature": "..."
  }
  */
  throw new Error("Service returned wrong signedNodeId Object format.");
};
