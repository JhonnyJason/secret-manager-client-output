// Generated by CoffeeScript 2.6.1
//###########################################################
var bytesToHex, c, ensureHexKey, hexChars, hexMap, i, len, newSecretBytes;

import {
  Client
} from "./client.js";

import * as noble from "@noble/ed25519";

import * as tbut from "thingy-byte-utils";

//###########################################################
newSecretBytes = noble.utils.randomPrivateKey;

bytesToHex = noble.utils.bytesToHex;

//###########################################################
hexChars = "0123456789abcdef";

hexMap = {};

for (i = 0, len = hexChars.length; i < len; i++) {
  c = hexChars[i];
  hexMap[c] = true;
}

//###########################################################
export var createClient = async function(secretKeyHex, publicKeyHex, serverURL) {
  var pbTest, pbTestHex, publicKey;
  if (!secretKeyHex) {
    secretKeyHex = bytesToHex(newSecretBytes());
    publicKey = (await noble.getPublicKey(secretKeyHex));
    publicKeyHex = bytesToHex(publicKey);
  } else {
    secretKeyHex = ensureHexKey(secretKeyHex);
  }
  if (!publicKeyHex) {
    publicKey = (await noble.getPublicKey(secretKeyHex));
    publicKeyHex = bytesToHex(publicKey);
  } else {
    publicKeyHex = ensureHexKey(publicKeyHex);
    pbTest = (await noble.getPublicKey(secretKeyHex));
    pbTestHex = bytesToHex(pbTest);
    if (publicKeyHex !== pbTestHex) {
      throw new Error("PublicKey does not fit secretKey!");
    }
  }
  return new Client(secretKeyHex, publicKeyHex, serverURL);
};

//###########################################################
ensureHexKey = function(key) {
  var j, len1;
  if (key instanceof Uint8Array) {
    if (key.length !== 32) {
      throw new Error("Invalid key length!");
    }
    key = bytesToHex(key);
  }
  if (typeof key !== "string") {
    throw new Error("Invalid type, hexString or Uint8Array expected!");
  }
  if (key.charAt(1) === "x") {
    key = key.slice(2);
  }
  if (key.length !== 64) {
    throw new Error("Invalid key length!");
  }
  for (j = 0, len1 = key.length; j < len1; j++) {
    c = key[j];
    if (hexMap[c] == null) {
      throw new Error("Non-hex character in key!");
    }
  }
  return key;
};
