import fetch from "isomorphic-fetch";
export const request = (url: string) => {
  return fetch(url);
};
