import sha256 from "crypto-js/sha256";
import { startsWith, inc } from "ramda";

export const generateHash = (nonce: number, str: string): string =>
  sha256(nonce + str).toString();

export const findHash = (str: string, startFrom = "0") => {
  let nonce = 0;
  let hash = generateHash(nonce, str);
  while (!startsWith(startFrom, hash)) {
    nonce = inc(nonce);
    hash = generateHash(nonce, str);
  }
  return hash;
};
