import { SHA256 } from "crypto-js";
import { startsWith, inc } from "ramda";

export const generateHash = (nonce: number, str: string): string =>
  SHA256(nonce + str).toString();

export const findHash = (str: string, startFrom = "0") => {
  let nonce = 0;
  let hash = generateHash(nonce, str);
  while (!startsWith(startFrom, hash)) {
    nonce = inc(nonce);
    hash = generateHash(nonce, str);
  }
  console.warn(`str: ${str}`);
  console.warn(`nonce counter: ${nonce}`);
  return hash;
};
