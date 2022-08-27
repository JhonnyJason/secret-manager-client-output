// Generated by CoffeeScript 2.7.0
//###########################################################
//region imports
var acceptSecretsFrom, addFriendServer, addNodeId, addNotificationHook, createSignature, decrypt, deleteSecret, deleteSharedSecret, encrypt, getAuthCode, getNodeId, getSecret, getSecretFrom, getSecretSpace, getSubSpace, prepareNewKeys, removeNodeId, setSecret, shareSecretTo, stopAcceptSecretsFrom;

import * as secUtl from "secret-manager-crypto-utils";

import * as tbut from "thingy-byte-utils";

import * as sci from "./secretmanagementinterface.js";

import * as timestampCreator from "./validatabletimestampmodule.js";

//endregion

  //###########################################################
export var Client = class Client {
  constructor(secretKeyHex1, publicKeyHex, serverURL1, closureDate1, authCode) {
    this.secretKeyHex = secretKeyHex1;
    this.publicKeyHex = publicKeyHex;
    this.serverURL = serverURL1;
    this.closureDate = closureDate1;
    this.nonce = 0;
    if ((this.secretKeyHex != null) && (this.secretKeyHex != null)) {
      this.secretKeyBytes = tbut.hexToBytes(this.secretKeyHex);
      this.publicKeyBytes = tbut.hexToBytes(this.publicKeyHex);
      this.keysReady = true;
    } else {
      this.keysReady = prepareNewKeys(this);
    }
    if (authCode != null) {
      this.ready = addNodeId(this, authCode);
    } else if (this.keysReady === true) {
      this.ready = true;
    } else {
      throw new Error("Unexpected Error: We neither have an authCode nor keys.");
    }
  }

  //#######################################################
  async updateServerURL(serverURL, authCode) {
    this.serverURL = serverURL;
    this.nonce = 0;
    this.ready = addNodeId(this, authCode);
    return (await this.ready);
  }

  async eraseFromServer() {
    await this.ready;
    this.ready = removeNodeId(this);
    return (await this.ready);
  }

  
    //#######################################################
  async getSecretSpace() {
    var secret;
    await this.ready;
    secret = (await getSecretSpace(this));
    return (await decrypt(secret, this.secretKeyHex));
  }

  async getSubSpace(fromId) {
    var secret;
    await this.ready;
    secret = (await getSubSpace(fromId, this));
    return (await decrypt(secret, this.secretKeyHex));
  }

  
    //#######################################################
  async getSecret(secretId) {
    var secret;
    await this.ready;
    secret = (await getSecret(secretId, this));
    return (await decrypt(secret, this.secretKeyHex));
  }

  async setSecret(secretId, secret) {
    await this.ready;
    secret = (await encrypt(secret, this.publicKeyHex));
    return (await setSecret(secretId, secret, this));
  }

  async deleteSecret(secretId) {
    await this.ready;
    return (await deleteSecret(secretId, this));
  }

  //#######################################################
  async acceptSecretsFrom(fromId) {
    await this.ready;
    return (await acceptSecretsFrom(fromId, this));
  }

  async stopAcceptSecretsFrom(fromId) {
    await this.ready;
    return (await stopAcceptSecretsFrom(fromId, this));
  }

  //#######################################################
  async getSecretFrom(fromId, secretId) {
    var secret;
    await this.ready;
    secret = (await getSecretFrom(fromId, secretId, this));
    return (await decrypt(secret, this.secretKeyHex));
  }

  async shareSecretTo(shareToId, secretId, secret) {
    await this.ready;
    secret = (await encrypt(secret, shareToId));
    return (await shareSecretTo(shareToId, secretId, secret, this));
  }

  async deleteSharedSecret(sharedToId, secretId) {
    await this.ready;
    return (await deleteSharedSecret(sharedToId, secretId, this));
  }

  
    //#######################################################
  async addNotificationHook(type, specific) {
    return (await this.ready);
  }

  async generateAuthCodeFor(action) {
    return (await this.ready);
  }

  addFriendServer(serverURL, serverNodeId, authCode) {}

  getServerId(authCode) {}

  
    //#######################################################
  incNonce() {
    this.nonce = ++this.nonce % 1000;
  }

};

//###########################################################
//region internalFunctions

//###########################################################
//region cryptoHelpers
decrypt = async function(content, secretKey) {
  var err;
  content = (await secUtl.asymmetricDecrypt(content, secretKey));
  content = secUtl.removeSalt(content);
  try {
    content = JSON.parse(content);
  } catch (error) {
    err = error;
    return content; // was no stringified Object
  }
  if ((content.encryptedContent != null) || (content.encryptedContentHex != null)) {
    content = (await secUtl.asymmetricDecrypt(content, secretKey));
    content = secUtl.removeSalt(content);
    try {
      content = JSON.parse(content);
    } catch (error) {
      err = error;
      return content; // was no stringified Object
    }
  }
  return content;
};

//###########################################################
encrypt = async function(content, publicKey) {
  var salt;
  if (typeof content === "object") {
    content = JSON.stringify(content);
  }
  salt = secUtl.createRandomLengthSalt();
  content = salt + content;
  content = (await secUtl.asymmetricEncrypt(content, publicKey));
  return JSON.stringify(content);
};

//###########################################################
createSignature = async function(payload, route, secretKeyHex) {
  var content;
  content = route + JSON.stringify(payload);
  return (await secUtl.createSignature(content, secretKeyHex));
};

//###########################################################
prepareNewKeys = async function(client) {
  var kp;
  if (client.secretKeyHex == null) {
    kp = (await secUtl.createKeyPairHex());
    client.secretKeyHex = kp.secretKeyHex;
    client.publicKeyHex = kp.publicKeyHex;
  } else {
    client.publicKeyHex = (await secUtl.createPublicKeyHex(secretKeyHex));
  }
  client.secretKeyBytes = tbut.hexToBytes(client.secretKeyHex);
  client.publicKeyBytes = tbut.hexToBytes(client.publicKeyHex);
  return true;
};

//endregion

//###########################################################
//region effectiveSCI
addNodeId = async function(client, authCode) {
  var closureDate, nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  await client.keysReady;
  console.log("addNodeId called!");
  server = client.serverURL;
  secretKey = client.secretKeyHex;
  publicKey = client.publicKeyHex;
  timestamp = timestampCreator.create();
  closureDate = client.closureDate;
  nonce = client.nonce;
  client.incNonce();
  payload = {authCode, publicKey, closureDate, timestamp, nonce};
  route = "/addNodeId";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.addNodeId(server, authCode, publicKey, closureDate, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("addNodeId replied with error: " + reply.error);
  }
  return reply;
};

removeNodeId = async function(client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, timestamp, nonce};
  route = "/removeNodeId";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.removeNodeId(server, publicKey, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("removeNodeId replied with error: " + reply.error);
  }
  return reply;
};

//###########################################################
getSecretSpace = async function(client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, timestamp, nonce};
  route = "/getSecretSpace";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.getSecretSpace(server, publicKey, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("getSecretSpace replied with error: " + reply.error);
  }
  return reply;
};

getSubSpace = async function(fromId, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, fromId, timestamp, nonce};
  route = "/getSubSpace";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.getSubSpace(server, publicKey, fromId, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("getSubSpace replied with error: " + reply.error);
  }
  return reply;
};

//###########################################################
getSecret = async function(secretId, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, secretId, timestamp, nonce};
  route = "/getSecret";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.getSecret(server, publicKey, secretId, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("getSecret replied with error: " + reply.error);
  }
  return reply;
};

setSecret = async function(secretId, secret, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, secretId, secret, timestamp, nonce};
  route = "/setSecret";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.setSecret(server, publicKey, secretId, secret, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("setSecret replied with error: " + reply.error);
  }
  return reply;
};

deleteSecret = async function(secretId, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, secretId, timestamp, nonce};
  route = "/deleteSecret";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.deleteSecret(server, publicKey, secretId, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("deleteSecret replied with error: " + reply.error);
  }
  return reply;
};

//###########################################################
acceptSecretsFrom = async function(fromId, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, fromId, timestamp, nonce};
  route = "/startAcceptingSecretsFrom";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.startAcceptingSecretsFrom(server, publicKey, fromId, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("acceptSecretsFrom replied with error: " + reply.error);
  }
  return reply;
};

stopAcceptSecretsFrom = async function(fromId, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, fromId, timestamp};
  route = "/stopAcceptingSecretsFrom";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.stopAcceptingSecretsFrom(server, publicKey, fromId, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("stopAcceptSecretsFrom replied with error: " + reply.error);
  }
  return reply;
};

//###########################################################
getSecretFrom = async function(fromId, secretId, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, fromId, secretId, timestamp, nonce};
  route = "/getSecretSpace";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.getSecretFrom(server, publicKey, fromId, secretId, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("getSecretFrom replied with error: " + reply.error);
  }
  return reply;
};

shareSecretTo = async function(shareToId, secretId, secret, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, shareToId, secretId, secret, timestamp, nonce};
  route = "/shareSecretTo";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.shareSecretTo(server, publicKey, shareToId, secretId, secret, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("shareSecretTo replied with error: " + reply.error);
  }
  return reply;
};

deleteSharedSecret = async function(sharedToId, secretId, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, sharedToId, secretId, timestamp, nonce};
  route = "/deleteSharedSecret";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.deleteSharedSecret(server, publicKey, sharedToId, secretId, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("deleteSharedSecret replied with error: " + reply.error);
  }
  return reply;
};

//###########################################################
addNotificationHook = async function(type, specific, client) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, type, specific, timestamp, nonce};
  route = "/addNotificationHook";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.addNotificationHook(server, publicKey, type, specific, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("addNotificationHook replied with error: " + reply.error);
  }
  return reply;
};

getAuthCode = async function(action) {
  var nonce, payload, publicKey, reply, route, secretKey, server, signature, timestamp;
  server = client.serverURL;
  publicKey = client.publicKeyHex;
  secretKey = client.secretKeyHex;
  timestamp = timestampCreator.create();
  nonce = client.nonce;
  client.incNonce();
  payload = {publicKey, action, timestamp, nonce};
  route = "/getAuthCode";
  signature = (await createSignature(payload, route, secretKey));
  reply = (await sci.getAuthCode(server, publicKey, action, timestamp, signature, nonce));
  if (reply.error != null) {
    throw new Error("getAuthCode replied with error: " + reply.error);
  }
  return reply;
};


//###########################################################
addFriendServer = async function(serverURL, serverNodeId, authCode, client) {
  var reply, server;
  server = client.serverURL;
  reply = (await sci.addFriendServer(server, authCode, serverURL, serverNodeId));
  if (reply.error != null) {
    throw new Error("addFriendServer replied with error: " + reply.error);
  }
  return reply;
};

getNodeId = async function(authCode, client) {
  var reply, server;
  server = client.serverURL;
  reply = (await sci.getNodeId(server, authCode));
  if (reply.error != null) {
    throw new Error("getNodeId replied with error: " + reply.error);
  }
  return reply;
};


//endregion

//endregion
